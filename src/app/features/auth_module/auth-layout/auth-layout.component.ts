import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundService } from '../../../shared/services/background.service';

@Component({
  selector: 'test-auth-layout',
  imports: [RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  bgImage: string = 'assets/images/default-bg-image.png';

  constructor(private bgService: BackgroundService) {}

  ngOnInit() {
    this.bgService.bgImage$.subscribe(image => {
      this.bgImage = image;
    });
  }

}
