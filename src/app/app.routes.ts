import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';







// /cv

export const routes: Routes = [
  // Si le user demande l'uri '/', c'est qu'il veut afficher le FirstComponent
  { path: '', loadComponent: () => import('./components/first/first.component').then(m => m.FirstComponent)},
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)},
  { path: 'word', loadComponent: () => import('./directives/mini-word/mini-word.component').then(m => m.MiniWordComponent)},
  { path: 'color', loadComponent: () => import('./components/color/color.component').then(m => m.ColorComponent)},
  { path: 'todo', loadChildren: () => import('./todo/todo.routes').then(
    module => module.todoRoutes
  )},
  { path: 'cv',
    data: {
      preload: true
    },
    loadChildren: () => import('./cv/cv.routes').then(
    module => module.cvRoutes
  )},
  { path: 'hello/:name', loadComponent: () => import('./components/second/second.component').then(m => m.SecondComponent)},
  { path: '**', loadComponent: () => import('./components/nf404/nf404.component').then(m => m.NF404Component)},

];
