import { Component, Input, input } from '@angular/core';
import { StatusCardComponent } from "../../../../../../shared/components/status-card/status-card.component";

@Component({
  selector: 'test-work-groups-header',
  standalone: true,
  imports: [StatusCardComponent],
  templateUrl: './work-groups-header.component.html',
  styleUrl: './work-groups-header.component.css'
})
export class WorkGroupsHeaderComponent {
  @Input() currentProjectName!: string;
  @Input() currentProjectCode!: string;
}
