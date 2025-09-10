import { Routes } from '@angular/router';
import { authRoutes } from './features/auth_module/auth.routng';
import { secureRoutes } from './features/secure-layout/secure-layout.routes';

export const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', children: authRoutes},
  {path: 'u', children: secureRoutes}
];
