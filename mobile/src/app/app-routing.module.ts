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
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'lista-compras',
    loadChildren: () => import('./pages/lista-compras/lista-compras.module').then( m => m.ListaComprasPageModule)
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./pages/movimientos/movimientos.module').then( m => m.MovimientosPageModule)
  },
  {
    path: 'comidas',
    loadChildren: () => import('./pages/comidas/comidas.module').then( m => m.ComidasPageModule)
  },
  {
    path: 'dcomidas',
    loadChildren: () => import('./pages/comidas/pages/dcomidas/dcomidas.module').then( m => m.DcomidasPageModule)
  },
  {
    path: 'menudetail/:idMenu',
    loadChildren: () => import('./pages/comidas/pages/menudetail/menudetail.module').then( m => m.MenudetailPageModule)
  },
  {
    path: 'menus',
    loadChildren: () => import('./pages/comidas/pages/dmenu/dmenu.module').then( m => m.DmenuPageModule)
  },
  {
    path: 'exit',
    loadChildren: () => import('./pages/exit/exit.module').then( m => m.ExitPageModule)
  },
  {
    path: 'editDia',
    loadChildren: () => import('./pages/comidas/pages/editdia/editdia.module').then( m => m.EditdiaPageModule)
  },
  {
    path: 'editDia/:dia',
    loadChildren: () => import('./pages/comidas/pages/editdia/editdia.module').then( m => m.EditdiaPageModule)
  },
  {
    path: 'editDia/mediodia/:dia',
    loadChildren: () => import('./pages/comidas/pages/editdia/pages/mediodia/mediodia.module').then( m => m.MediodiaPageModule)
  },
  {
    path: 'editDia/noche/:dia',
    loadChildren: () => import('./pages/comidas/pages/editdia/pages/noche/noche.module').then( m => m.NochePageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
