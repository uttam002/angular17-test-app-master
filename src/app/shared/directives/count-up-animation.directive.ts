import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpAnimationDirective implements OnChanges {
  @Input() appCountUp: number = 0;
  @Input() duration: number = 1000; // ms (default 1 second)

  private el: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appCountUp']) {
      this.animateCount(changes['appCountUp'].currentValue);
    }
  }

  private animateCount(targetValue: number): void {
    const startValue = Number(this.el.innerText) || 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);

      const current = Math.floor(
        startValue + (targetValue - startValue) * progress
      );
      this.el.innerText = current.toString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}
