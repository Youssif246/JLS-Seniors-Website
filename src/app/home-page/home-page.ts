import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MemoriesSection } from '../memories-section/memories-section';
import { TeachersSection } from '../teachers-section/teachers-section';
import { HeroSection } from '../hero-section/hero-section';
import { AboutSection } from '../about-section/about-section';
import { VideoSection } from '../video-section/video-section';
import { JourneySection } from '../journey-section/journey-section';
import { FinalSection } from '../final-section/final-section';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, RouterLink, MemoriesSection, TeachersSection, HeroSection, AboutSection, VideoSection, JourneySection, FinalSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
}
