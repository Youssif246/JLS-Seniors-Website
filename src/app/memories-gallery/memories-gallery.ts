import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentsData } from '../students-data';
import { CommonModule } from '@angular/common';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-memories-gallery',
  imports: [RouterLink, CommonModule, Loader],
  templateUrl: './memories-gallery.html',
  styleUrl: './memories-gallery.css'
})
export class MemoriesGallery {
  constructor(public studentsData: StudentsData, private cdf: ChangeDetectorRef) {}
  featuredMemories: any[] = [
    {
      imageSrc:"https://res.cloudinary.com/dievut6ka/image/upload/v1780592519/copy_of_c5a7c2ec-8422-47b0-821a-f0bb590b2faf_yvnfkv.jpg",
      tag:"Class of 2027"
    },
    {
      imageSrc:"https://res.cloudinary.com/dievut6ka/image/upload/v1780594640/WhatsApp_Image_2026-06-04_at_8.33.31_PM_shm0mb.jpg",
      tag:"The Journey"
    },
    {
      imageSrc:"https://res.cloudinary.com/dievut6ka/image/upload/v1780594642/WhatsApp_Image_2026-06-04_at_8.33.34_PM_fjogps.jpg",
      tag:"Forever"
    }
  ]
  memoriesImages: any[] = [];
  
  ngOnInit() {
    this.loadMemories();
  }

  loadMemories() {
    if (this.studentsData.memoriesImages.length > 0) {
      this.memoriesImages = this.studentsData.memoriesImages.sort(() => Math.random() - 0.5)
    } else {
      this.studentsData.getMemoriesImages().subscribe((response: any) => {
        this.studentsData.memoriesImages = response.resources;
        this.memoriesImages = this.studentsData.memoriesImages.sort(() => Math.random() - 0.5);
        this.cdf.detectChanges();
      });
    }
  }

  getImageUrl(image:any) {
    return `https://res.cloudinary.com/dievut6ka/image/upload/${image.public_id}.${image.format}`;
  }
}
