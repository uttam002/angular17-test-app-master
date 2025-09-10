import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardConfig, StatValue } from '../../../core/models/CardConfig';
import { CounterAnimationDirective } from '../../directives/counter-animation.directive';

@Component({
  selector: 'test-generic-card',
  standalone: true,
  imports: [CommonModule, CounterAnimationDirective],
  templateUrl: './GenericCard.component.html',
  styleUrl: './GenericCard.component.css'
})
export class GenericCardComponent {
  @Input() config!: CardConfig;

  // Helper method to check if a stat value should be animated
  shouldAnimate(statValue: StatValue): boolean {
    return this.config.enableAnimation !== false && statValue.animated === true;
  }

  // Helper method to get animation options for a stat value
  getAnimationOptions(statValue: StatValue) {
    return statValue.animationOptions || {};
  }

  // Helper method to get the numeric value for animation
  getNumericValue(statValue: StatValue): number {
    if (typeof statValue.value === 'string') {
      // Extract number from string (e.g., "48:00" -> 48, "$100" -> 100)
      const numericValue = parseFloat(statValue.value.replace(/[^\d.-]/g, ''));
      return isNaN(numericValue) ? 0 : numericValue;
    }
    return statValue.value;
  }
}
