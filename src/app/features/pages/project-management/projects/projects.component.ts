import { Component } from '@angular/core';
import { ProjectManagementHeaderComponent } from "./component/project-management-header/project-management-header.component";
import { ProjectListComponent } from "./component/project-list/project-list.component";

@Component({
  selector: 'test-projects',
  standalone: true,
  imports: [ProjectManagementHeaderComponent, ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
