import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children : [
      {
        path : '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./pages/compras/compras.module').then( m => m.ComprasPageModule)
  },
  {
    path: 'gcompras',
    loadChildren: () => import('./pages/home/pages/gcompras/gcompras.module').then( m => m.GcomprasPageModule)
  },
  {
    path: 'dcompras',
    loadChildren: () => import('./pages/home/pages/dcompras/dcompras.module').then( m => m.DcomprasPageModule)
  },
  {
    path: 'ccompras',
    loadChildren: () => import('./pages/home/pages/ccompras/ccompras.module').then( m => m.CcomprasPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then( m => m.TareasPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
