import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'especialidades' },
  {
    path: 'especialidades',
    loadChildren: () => import('./especialidades/especialidades.routes').then(m => m.ESPECIALIDADES_ROUTES)
  }

];

//https://angular.io/guide/standalone-components
