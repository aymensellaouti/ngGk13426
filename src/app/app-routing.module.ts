import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';

// /cv

const routes: Routes = [
  // Si le user demande l'uri '/', c'est qu'il veut afficher le FirstComponent
  { path: '', component: FirstComponent},
  { path: 'cv', component: CvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'color', component: ColorComponent},
  { path: 'hello/:name', component: SecondComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
