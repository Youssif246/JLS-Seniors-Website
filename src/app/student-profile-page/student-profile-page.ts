import { Component } from '@angular/core';
import { StudentsData } from '../students-data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-student-profile-page',
  imports: [CommonModule, RouterLink, Loader],
  templateUrl: './student-profile-page.html',
  styleUrl: './student-profile-page.css',
})
export class StudentProfilePage {
  constructor(private route: ActivatedRoute, private students: StudentsData, private cdr: ChangeDetectorRef) { }
  studentImages: any[] = []
  studentData: any
  studentSlug: string = ""

  ngOnInit() {
    this.loadStudentProfile();
  }

  loadStudentProfile(): void {
    this.studentSlug = this.route.snapshot.paramMap.get('slug')!
    if (this.students.studentsServiceData.length > 0) {
      this.studentData = this.students.getSpecificStudent(this.studentSlug)
    } else {
      this.students.getStudents().subscribe((data: any) => {
        this.students.studentsServiceData = data
        this.studentData = this.students.getSpecificStudent(this.studentSlug)
        this.cdr.detectChanges();
      })
    }
    this.students.getStudentImages(this.studentSlug).subscribe((response: any) => {
      this.studentImages = response.resources
      this.cdr.detectChanges();
    })
  }

  getImageUrl(image: any) {
    return `https://res.cloudinary.com/dievut6ka/image/upload/${image.public_id}.${image.format}`;
  }
}
