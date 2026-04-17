import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';

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
  { path: 'hello/:name', component: SecondComponent},
  { path: '**', component: NF404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
