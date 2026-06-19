import { Component } from '@angular/core';
import { StudentsData } from '../students-data';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-teachers-page',
  standalone: true,
  imports: [RouterLink, CommonModule, Loader],
  templateUrl: './teachers-page.html',
  styleUrl: './teachers-page.css',
})
export class TeachersPage {
  constructor(private teachersDataService: StudentsData, private cdr: ChangeDetectorRef) { }

  teachersData: any[] = []

  ngOnInit() {
    this.loadTeachers()
  }

  loadTeachers() {
    if (this.teachersDataService.teachersServiceData.length > 0) {
      this.teachersData = this.teachersDataService.teachersServiceData
    } else {
      this.teachersDataService.getTeachers().subscribe((data: any) => {
        this.teachersDataService.teachersServiceData = data;
        this.teachersData = this.teachersDataService.teachersServiceData.sort(() => Math.random() - 0.5)
        this.cdr.detectChanges()
      })
    }
  }
}
