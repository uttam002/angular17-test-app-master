import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterAnimationDirective } from '../../directives/counter-animation.directive';
import { CounterAnimationOptions } from '../../directives/counter-animation.directive';

@Component({
  selector: 'app-counter-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CounterAnimationDirective],
  templateUrl: './counter-demo.component.html',
  styleUrl: './counter-demo.component.css'
})
export class CounterDemoComponent {
  interactiveValue: number = 1000;

  // Configuration options for different counter examples
  formattedOptions: CounterAnimationOptions = {
    duration: 3000,
    easing: 'ease-out',
    decimalPlaces: 0,
    separator: ',',
    prefix: '',
    suffix: '',
    formatNumber: true
  };

  currencyOptions: CounterAnimationOptions = {
    duration: 2500,
    easing: 'ease-out',
    decimalPlaces: 2,
    separator: ',',
    prefix: '$',
    suffix: '',
    formatNumber: true
  };

  percentageOptions: CounterAnimationOptions = {
    duration: 2000,
    easing: 'ease-out',
    decimalPlaces: 1,
    separator: '',
    prefix: '',
    suffix: '%',
    formatNumber: false
  };

  linearOptions: CounterAnimationOptions = {
    duration: 2000,
    easing: 'linear',
    decimalPlaces: 0,
    formatNumber: false
  };

  easeInOptions: CounterAnimationOptions = {
    duration: 2000,
    easing: 'ease-in',
    decimalPlaces: 0,
    formatNumber: false
  };

  easeOutOptions: CounterAnimationOptions = {
    duration: 2000,
    easing: 'ease-out',
    decimalPlaces: 0,
    formatNumber: false
  };

  easeInOutOptions: CounterAnimationOptions = {
    duration: 2000,
    easing: 'ease-in-out',
    decimalPlaces: 0,
    formatNumber: false
  };

  interactiveOptions: CounterAnimationOptions = {
    duration: 1500,
    easing: 'ease-out',
    decimalPlaces: 0,
    separator: ',',
    prefix: '',
    suffix: '',
    formatNumber: true
  };

  updateCounter(): void {
    // The directive will automatically detect the change and animate
    // This method is here for demonstration purposes
  }
}
