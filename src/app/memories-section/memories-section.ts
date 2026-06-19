import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-memories-section',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './memories-section.html',
  styleUrl: './memories-section.css',
})
export class MemoriesSection {
  sharedMemories: any[] = [
    {
      image: 'https://res.cloudinary.com/dievut6ka/image/upload/v1780692204/dd5e76ca-fa65-4871-8140-32f37c8f3c0f_e6qrdh.jpg',
      title: 'Side by Side',  
    },
    {
      image: 'https://res.cloudinary.com/dievut6ka/image/upload/v1779476709/93c564eb-06fd-4eb6-a3dc-3b5f9d5d0fbf_jtvstn.jpg',
      title: 'One Last Summer',
    },
    {
      image: 'https://res.cloudinary.com/dievut6ka/image/upload/v1779476701/8c81c239-57ae-4227-8bea-790c9a7fc38d_hib5i1.jpg',
      title: 'Same Chapter',
    },
    {
      image: 'https://res.cloudinary.com/dievut6ka/image/upload/v1779649819/WhatsApp_Image_2026-05-23_at_8.55.55_PM_1_vbb6yu.jpg',
      title: 'Good Times',
    }
  ]
}
