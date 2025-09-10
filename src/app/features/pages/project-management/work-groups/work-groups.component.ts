import { ProjectStateService } from './../../../../shared/services/projectState.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectRow } from '../../../../core/models/ProjectRow';
import { WorkGroupsHeaderComponent } from "./components/work-groups-header/work-groups-header.component";
import { WorkGroupsListComponent } from "./components/work-groups-list/work-groups-list.component";

@Component({
  selector: 'test-work-groups',
  standalone: true,
  imports: [WorkGroupsHeaderComponent, WorkGroupsListComponent],
  templateUrl: './work-groups.component.html',
  styleUrl: './work-groups.component.css'
})
export class WorkGroupsComponent implements OnInit{
  constructor(private router: Router, private projectStateService: ProjectStateService){}
  currentProject!: ProjectRow

  ngOnInit() {
    const project = this.projectStateService.getProject();
    if (project) {
      // show project details
      this.currentProject = project;
    } else {
      // handle no project selected (e.g., redirect to project list)
      this.router.navigate(['u/project-management/projects']);
    }
  }
}
