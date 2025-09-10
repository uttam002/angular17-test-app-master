import { Directive, ElementRef, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';

export interface CounterAnimationOptions {
  duration?: number; // Animation duration in milliseconds
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  startValue?: number; // Starting value (default: 0)
  decimalPlaces?: number; // Number of decimal places to show
  separator?: string; // Thousand separator (e.g., ',')
  prefix?: string; // Text before the number
  suffix?: string; // Text after the number
  formatNumber?: boolean; // Whether to format the number with separators
}

@Directive({
  selector: '[appCounterAnimation]',
  standalone: true
})
export class CounterAnimationDirective implements OnInit, OnChanges, OnDestroy {
  @Input('appCounterAnimation') targetValue: number | string = 0;
  @Input() counterOptions: CounterAnimationOptions = {};

  private animationId: number | null = null;
  private startTime: number = 0;
  private startValue: number = 0;
  private isAnimating: boolean = false;

  private defaultOptions: Required<CounterAnimationOptions> = {
    duration: 2000,
    easing: 'ease-out',
    startValue: 0,
    decimalPlaces: 0,
    separator: ',',
    prefix: '',
    suffix: '',
    formatNumber: true
  };

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.animateToValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['targetValue'] && !changes['targetValue'].firstChange) {
      this.animateToValue();
    }
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  private animateToValue(): void {
    this.stopAnimation();

    const options = { ...this.defaultOptions, ...this.counterOptions };
    this.startValue = this.isAnimating ? this.getCurrentValue() : options.startValue;

    const numericTargetValue = typeof this.targetValue === 'string' ? parseFloat(this.targetValue) : this.targetValue;

    if (numericTargetValue === this.startValue) {
      this.updateDisplay(numericTargetValue, options);
      return;
    }

    this.isAnimating = true;
    this.startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - this.startTime;
      const progress = Math.min(elapsed / options.duration, 1);

      const easedProgress = this.applyEasing(progress, options.easing);
      const currentValue = this.startValue + (numericTargetValue - this.startValue) * easedProgress;

      this.updateDisplay(currentValue, options);

      if (progress < 1) {
        this.animationId = requestAnimationFrame(animate);
      } else {
        this.isAnimating = false;
        this.animationId = null;
      }
    };

    this.animationId = requestAnimationFrame(animate);
  }

  private updateDisplay(value: number, options: Required<CounterAnimationOptions>): void {
    let displayValue = value.toFixed(options.decimalPlaces);

    if (options.formatNumber && options.separator) {
      displayValue = this.formatNumberWithSeparator(parseFloat(displayValue), options.separator, options.decimalPlaces);
    }

    const finalValue = `${options.prefix}${displayValue}${options.suffix}`;
    this.elementRef.nativeElement.textContent = finalValue;
  }

  private formatNumberWithSeparator(value: number, separator: string, decimalPlaces: number): string {
    const parts = value.toFixed(decimalPlaces).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join('.');
  }

  private applyEasing(progress: number, easing: string): number {
    switch (easing) {
      case 'linear':
        return progress;
      case 'ease-in':
        return progress * progress;
      case 'ease-out':
        return 1 - Math.pow(1 - progress, 2);
      case 'ease-in-out':
        return progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      default:
        return progress;
    }
  }

  private getCurrentValue(): number {
    const text = this.elementRef.nativeElement.textContent || '0';
    const numericValue = parseFloat(text.replace(/[^\d.-]/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
  }

  private stopAnimation(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
      this.isAnimating = false;
    }
  }
}
