import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/courses' },
  {
    path: 'aa',
    loadComponent: () => import('./especialidades/especialidades/especialidades.component').then(mod => mod.EspecialidadesComponent)
  }

  // {
  //   path:"aa",
  //   component:EspecialidadesComponent
  // }

];

//https://angular.io/guide/standalone-components
