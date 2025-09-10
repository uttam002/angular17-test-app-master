import { Routes } from '@angular/router';
import { SecureLayoutComponent } from './secure-layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { projectManagementRoutes } from '../pages/project-management/project-management.routes';

export const secureRoutes: Routes = [
    {
        path: '',
        component: SecureLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
              path: 'dashboard', component : DashboardComponent
            },
            {
              path: 'project-management', children : projectManagementRoutes
            },
            {path: '**', redirectTo: 'dashboard' }
        ]
    },

];
