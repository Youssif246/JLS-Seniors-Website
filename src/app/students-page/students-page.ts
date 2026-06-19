import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsData } from '../students-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from "@angular/core";
import { Loader } from '../loader/loader';

@Component({
  standalone: true,
  selector: 'app-students-page',
  imports: [FormsModule, CommonModule, RouterLink, Loader],
  templateUrl: './students-page.html',
  styleUrl: './students-page.css',
})
export class StudentsPage {
  constructor(private studentsData: StudentsData, private cdr: ChangeDetectorRef) { }

  students: any[] = []
  query: string = ''

  ngOnInit(): void {
    this.loadStudents()
    
  }

  loadStudents(): void {
    if (this.studentsData.studentsServiceData.length > 0) {
      this.students = this.studentsData.studentsServiceData.sort(() => Math.random() - 0.5)
    } else {
      this.studentsData.getStudents().subscribe((data: any) => {
        this.studentsData.studentsServiceData = data
        this.students = this.studentsData.studentsServiceData.sort(() => Math.random() - 0.5)
        this.cdr.detectChanges()
      })
    }
  }
  
  search(): void {
    this.students = this.studentsData.getSearchedStudents(this.query)
  }

}
