import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="status-card">
    <div class="d-flex flex-nowrap align-items-center justify-content-between p-5">
      <div class="count">{{ count }}</div>
      <div class="label">{{ label }}</div>
    </div>
    <div class="line" [ngStyle]="{ 'background-color': color }"></div>
  </div>`,
  styleUrl: './status-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCardComponent {
  @Input() count: number = 0;
  @Input() label: string = '';
  @Input() color: string = '#ccc';
}
