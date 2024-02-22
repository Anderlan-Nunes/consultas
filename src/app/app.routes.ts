import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'especialidades' }, // como tem o redirecionamento o angula ja carrega este component
  {
    path: 'especialidades',
    loadChildren: () => import('./especialidades/especialidades.routes').then(m => m.ESPECIALIDADES_ROUTES)
  }

];

//https://angular.io/guide/standalone-components
