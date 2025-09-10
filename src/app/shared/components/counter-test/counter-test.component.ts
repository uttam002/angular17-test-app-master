import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterAnimationDirective } from '../../directives/counter-animation.directive';

@Component({
  selector: 'app-counter-test',
  standalone: true,
  imports: [CommonModule, FormsModule, CounterAnimationDirective],
  templateUrl: './counter-test.component.html',
  styleUrl: './counter-test.component.css'
})
export class CounterTestComponent {
  testValue: number = 1000;

  triggerAnimation(): void {
    // The directive will automatically detect the change and animate
    // This method is here for demonstration purposes
  }
}
