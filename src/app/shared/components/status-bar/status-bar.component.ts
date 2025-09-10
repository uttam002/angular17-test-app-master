import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { WorkGroupStatus } from '../../../core/models/WorkGroup';
import { CommonModule } from '@angular/common';
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'app-status-bar',
  standalone: true,
  imports: [CommonModule, MatTooltip],
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.css'
})
export class StatusBarComponent {
  @Input() statuses: WorkGroupStatus[] = [];
  @ContentChild(TemplateRef) statusTemplate!: TemplateRef<any>;

  getStatusColor(type: string): string {
    const colors: { [key: string]: string } = {
      'New': '#3498d8b9',
      'In-Progress': '#f39c12b9',
      'DevCompleted': '#2ecc71b9',
      'ReadyForTesting': '#9b59b6b9',
      'Closed': '#e74c3cb9'
    };
    return colors[type] || '#95a5a6';
  }
}
 //