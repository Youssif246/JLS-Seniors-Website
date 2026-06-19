import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journey-section',
  imports: [CommonModule],
  templateUrl: './journey-section.html',
  styleUrl: './journey-section.css',
})
export class JourneySection {
  journey: any[] = [
    {
      image: 'https://res.cloudinary.com/dievut6ka/image/upload/v1779476915/timline1_gurjwo.jpg',
      year: 2014,
      title: 'Where It All Began',
      caption: 'Tiny steps, big dreams… this is where our journey first started.',
    },
    {
      image: 'https://res.cloudinary.com/dievut6ka/image/upload/v1779476918/timline2_qokhof.jpg',
      year: 2018,
      title: 'Growing & Learning',
      caption: 'We learned, we played, and slowly started becoming who we are.',
    },
    {
      image: 'https://res.cloudinary.com/dievut6ka/image/upload/v1779477145/timline3_hbrsgu.jpg',
      year: 2023,
      title: 'Finding Ourselves',
      caption: 'New challenges, new friendships… we were discovering ourselves.',
    },
    {
      image: 'https://res.cloudinary.com/dievut6ka/image/upload/v1779476933/timline4_w6hurj.jpg',
      year: 2026,
      title: 'The Final Chapter',
      caption: 'The end of a journey, but the beginning of everything ahead.',
    }
  ]
}
