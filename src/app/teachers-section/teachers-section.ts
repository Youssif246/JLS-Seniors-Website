import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { StudentsData } from '../students-data';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-teachers-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, Loader],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './teachers-section.html',
  styleUrl: './teachers-section.css'
})
export class TeachersSection {
  constructor(private teachersDataService: StudentsData, private cdr: ChangeDetectorRef) {}
  
  teachersData: any[] = [];
  
  ngOnInit() {
    this.loadTeachers();
    }

  loadTeachers() {
    if (this.teachersDataService.teachersServiceData.length > 0) {
      this.teachersData = this.teachersDataService.teachersServiceData.sort(() => Math.random() - 0.5)
    }else {
      this.teachersDataService.getTeachers().subscribe((data: any) => {
        this.teachersDataService.teachersServiceData = data;
        this.teachersData = this.teachersDataService.teachersServiceData.sort(() => Math.random() - 0.5)
        this.cdr.detectChanges()
      })
    }
  }
}
