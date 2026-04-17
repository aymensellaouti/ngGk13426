import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomPreloadingStrategy } from './preloading strategy/custom.preloading-strategy';

// /cv

const routes: Routes = [
  // Si le user demande l'uri '/', c'est qu'il veut afficher le FirstComponent
  { path: '', component: FirstComponent},
  { path: 'login', component: LoginComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'color', component: ColorComponent},
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(
    module => module.TodoModule
  )},
  { path: 'cv',
    data: {
      preload: true
    },
    loadChildren: () => import('./cv/cv.module').then(
    module => module.CvModule
  )},
  { path: 'hello/:name', component: SecondComponent},
  { path: '**', component: NF404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
