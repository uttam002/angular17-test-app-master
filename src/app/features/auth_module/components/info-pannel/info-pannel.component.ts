import { Component } from '@angular/core';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { BackgroundService } from '../../../../shared/services/background.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'test-info-pannel',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './info-pannel.component.html',
  styleUrls: ['./info-pannel.component.css']
})
export class InfoPanelComponent {
  images = [
    'assets/images/filler_image1.png',
    'assets/images/filler_image2.png',
    'assets/images/filler_image3.png'
  ];

  titles = ['Commitment', 'Excellence', 'Innovation'];
  descriptions = [
    'We stay dedicated to your success.',
    'Striving for quality in everything we do.',
    'Bringing fresh ideas to life.'
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  };

  constructor(private bgService: BackgroundService) {}

  onSlideChange(event: SlidesOutputData) {
    if (event && event.startPosition !== undefined) {
      const index = event.startPosition;
      this.bgService.setBackground(this.images[index]);
    }
  }
}
