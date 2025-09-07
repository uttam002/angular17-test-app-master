import { Routes } from '@angular/router';
import { authRoutes } from './features/auth_module/auth.routng';

export const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', children: authRoutes}
];
