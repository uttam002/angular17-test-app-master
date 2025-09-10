import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAnimationDirective } from '../../directives/counter-animation.directive';

@Component({
  selector: 'app-counter-examples',
  standalone: true,
  imports: [CommonModule, CounterAnimationDirective],
  templateUrl: './counter-examples.component.html',
  styleUrl: './counter-examples.component.css'
})
export class CounterExamplesComponent {
  // This component demonstrates various uses of the counter animation directive
  // All configuration is done through template properties
}
