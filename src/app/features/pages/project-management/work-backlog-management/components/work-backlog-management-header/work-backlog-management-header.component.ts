import { Component, Input } from '@angular/core';
import { TsButtonComponent, TsButtonConfig } from 'ts-components/form-controls/button';

@Component({
  selector: 'test-work-backlog-management-header',
  standalone: true,
  imports: [TsButtonComponent],
  templateUrl: './work-backlog-management-header.component.html',
  styleUrl: './work-backlog-management-header.component.css',
})
export class WorkBacklogManagementHeaderComponent {
  @Input() currentProjectName!: string;
  @Input() currentProjectCode!: string;

  addWorkItemButtonConfig: TsButtonConfig = {
    id: 'addWorkItemButton',
    buttonText: 'Add Work Item',
    color: 'primary',
    variant: 'solid',
    icon: 'add',
    cssClasses: [
      'add-work-item-btn'
    ],
    callback: () => {
      console.log('Add Work Item button clicked');
    }
  }
}
