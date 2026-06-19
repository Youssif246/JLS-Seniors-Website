import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { StudentsPage } from './students-page/students-page';
import { StudentProfilePage } from './student-profile-page/student-profile-page';
import { MemoriesGallery } from './memories-gallery/memories-gallery';
import { TeacherProfilePage } from './teacher-profile-page/teacher-profile-page';
import { TeachersPage } from './teachers-page/teachers-page';

export const routes: Routes = [
{ path: '', component: HomePage, title: 'JLS Seniors 2027' },

{ path: 'students', component: StudentsPage, title: 'Students | JLS Seniors 2027' },

{ path: 'students/:slug', component: StudentProfilePage, title: 'Student Profile | JLS Seniors 2027' },

{ path: 'teachers', component: TeachersPage, title: 'Teachers | JLS Seniors 2027' },

{ path: 'teachers/:slug', component: TeacherProfilePage, title: 'Teacher Profile | JLS Seniors 2027' },

{ path: 'memories', component: MemoriesGallery, title: 'Memories | JLS Seniors 2027' }
];
