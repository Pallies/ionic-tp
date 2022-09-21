import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'saisie-cours',
    loadChildren: () => import('./pages/courses/saisie-cours/saisie-cours.module').then( m => m.SaisieCoursPageModule)
  },
  {
    path: 'saisie-cours/:id',
    loadChildren: () => import('./pages/courses/modifier-cours/modifier-cours.module').then( m => m.ModifierCoursPageModule)
  },
  {
    path: 'liste-cours',
    loadChildren: () => import('./pages/courses/liste-cours/liste-cours.module').then( m => m.ListeCoursPageModule)
  },
  {
    path: 'rechercher-cours',
    loadChildren: () => import('./pages/courses/rechercher-cours/rechercher-cours.module').then( m => m.RechercherCoursPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
