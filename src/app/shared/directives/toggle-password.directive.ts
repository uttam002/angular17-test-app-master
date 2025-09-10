import { Directive, ElementRef, inject, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]',
  standalone: true
})
export class TogglePassword implements AfterViewInit {
  private shown = false;
  private icon!: HTMLElement;
  private renderer = inject(Renderer2);
  private hostEl = inject(ElementRef<HTMLElement>);

  ngAfterViewInit() {
    // Try to find input inside the custom component
    const input = this.hostEl.nativeElement.querySelector('input');
    if (!input) return; // safeguard

    const parent = this.renderer.parentNode(input);
    this.renderer.setStyle(parent, 'position', 'relative');

    this.icon = this.renderer.createElement('mat-icon');
    this.renderer.addClass(this.icon, 'material-icons');
    this.renderer.setProperty(this.icon, 'innerText', 'visibility_off');
    this.renderer.setStyle(this.icon, 'cursor', 'pointer');
    this.renderer.setStyle(this.icon, 'position', 'absolute');
    this.renderer.setStyle(this.icon, 'top', '54%');
    this.renderer.setStyle(this.icon, 'right', '2px');
    this.renderer.setStyle(this.icon, 'transform', 'translateY(-50%)');
    this.renderer.setStyle(this.icon, 'color', '#757575');

    this.renderer.appendChild(parent, this.icon);

    this.renderer.listen(this.icon, 'click', () => {
      this.shown = !this.shown;
      (input as HTMLInputElement).type = this.shown ? 'text' : 'password';
      this.icon.innerText = this.shown ? 'visibility' : 'visibility_off';
    });
  }
}
