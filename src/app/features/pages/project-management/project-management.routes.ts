import { Routes } from "@angular/router";
import { ProjectsComponent } from "./projects/projects.component";
import { WorkBacklogComponent } from "./work-backlog-management/work-backlog-management.component";
import { WorkGroupsComponent } from "./work-groups/work-groups.component";

export const projectManagementRoutes: Routes =[
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'work-backlog',
        component: WorkBacklogComponent
      },
      {
        path: 'work-groups',
        component:WorkGroupsComponent
      },
      {
        path: '**',
        redirectTo: 'projects'
      }
    ]
  }
]