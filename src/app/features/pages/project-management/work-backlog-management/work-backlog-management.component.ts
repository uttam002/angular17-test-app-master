import { Component, OnInit } from '@angular/core';
import { WorkBacklogManagementHeaderComponent } from "./components/work-backlog-management-header/work-backlog-management-header.component";
import { WorkBacklogManagementPlaygroundComponent } from "./components/work-backlog-management-playground/work-backlog-management-playground.component";
import { Router } from '@angular/router';
import { ProjectStateService } from '../../../../shared/services/projectState.service';
import { WorkGroupRow } from '../../../../core/models/WorkGroup';
import { ProjectRow } from '../../../../core/models/ProjectRow';

@Component({
  selector: 'test-work-backlog',
  standalone: true,
  imports: [WorkBacklogManagementHeaderComponent, WorkBacklogManagementPlaygroundComponent],
  templateUrl: './work-backlog-management.component.html',
  styleUrl: './work-backlog-management.component.css'
})
export class WorkBacklogComponent implements OnInit{
  constructor(private router: Router, private projectStateService: ProjectStateService){}

  currentWorkGroup!: WorkGroupRow;
  currentProject!: ProjectRow;

  ngOnInit() {
    const project = this.projectStateService.getProject();
    const workGroup = this.projectStateService.getWorkGroup();
    if (workGroup && project) {
      this.currentWorkGroup = workGroup;
      this.currentProject = project;
    } else {
      this.router.navigate(['u/project-management/projects']);
    }
  }
}
