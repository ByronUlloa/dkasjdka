import { AjustesComponent } from './backend/ajustes/ajustes.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'sign',
    loadChildren: () => import('./pages/sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'qracces',
    loadChildren: () => import('./pages/qracces/qracces.module').then( m => m.QraccesPageModule)
  },
  {
    path: 'qrmartes',
    loadChildren: () => import('./pages/qrmartes/qrmartes.module').then( m => m.QrmartesPageModule)
  },
  {
    path: 'qrfinal',
    loadChildren: () => import('./pages/qrfinal/qrfinal.module').then( m => m.QrfinalPageModule)
  },
  {
    path: 'qraprobado',
    loadChildren: () => import('./pages/qraprobado/qraprobado.module').then( m => m.QraprobadoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'ajustes',component:AjustesComponent
    
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
