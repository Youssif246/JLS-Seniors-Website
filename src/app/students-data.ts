import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class StudentsData {

  constructor(private http: HttpClient) {}
  studentsServiceData: any[] = []
  teachersServiceData: any[] = []
  memoriesImages: any[] = []

  getStudents() {
    return this.http.get(`https://youssif246.github.io/jls-seinors-website-data/students-data.json?t=${Date.now()}`)
  }

  getTeachers() {
    return this.http.get(`https://youssif246.github.io/jls-seinors-website-data/teachers-data.json?t=${Date.now()}`)
  }
  
  getMemoriesImages() {
    return this.http.get(
      `https://res.cloudinary.com/dievut6ka/image/list/memories.json?v=${Date.now()}`
    )
  }
  
  getStudentImages(studentSlug: string) {
    return this.http.get(
      `https://res.cloudinary.com/dievut6ka/image/list/${studentSlug}.json?v=${Date.now()}`
    )
  }

  getSpecificStudent(slug: string) {
    return this.studentsServiceData.find(s => s.Slug === slug);
  }

  getSpecificTeacher(slug: string) {
    return this.teachersServiceData.find(t => t.slug === slug);
  }

  getSearchedStudents(query: string) {
    const cleanQuery = query.trim().toLowerCase();
    return this.studentsServiceData.filter(s =>
      s.Name.trim().toLowerCase().includes(cleanQuery)
    )
  } 
}
