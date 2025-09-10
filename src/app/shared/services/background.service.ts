// background.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BackgroundService {
  private bgImageSource = new BehaviorSubject<string>('assets/images/filler_image1.png');
  bgImage$ = this.bgImageSource.asObservable();

  setBackground(image: string) {
    this.bgImageSource.next(image);
  }
}
