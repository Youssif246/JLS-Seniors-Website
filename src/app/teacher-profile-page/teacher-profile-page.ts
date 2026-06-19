import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StudentsData } from '../students-data';
import { Loader } from '../loader/loader';

declare const AOS: any;
@Component({
  selector: 'app-teacher-profile-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Loader],
  templateUrl: './teacher-profile-page.html',
  styleUrl: './teacher-profile-page.css'
})
export class TeacherProfilePage implements OnInit {
  teacherData: any;
  teacherSlug: string = '';

  constructor(
    private route: ActivatedRoute,
    private studentsData: StudentsData,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadTeacherData();
  }

  loadTeacherData(): void {
    this.teacherSlug = this.route.snapshot.paramMap.get('slug')!
    if (this.studentsData.teachersServiceData.length > 0) {
      this.teacherData = this.studentsData.getSpecificTeacher(this.teacherSlug)
      this.aosRefresh()
      this.cdr.detectChanges();
    } else {
      this.studentsData.getTeachers().subscribe((data: any) => {
        this.studentsData.teachersServiceData = data;
        this.teacherData = this.studentsData.getSpecificTeacher(this.teacherSlug)
        this.aosRefresh()
        this.cdr.detectChanges();
      })
    }
  }  

  aosRefresh() {
      setTimeout(() => {
        AOS.refreshHard();
      }, 100)
    }
}
