import { Routes } from '@angular/router';


export const todoRoutes: Routes = [{ path: '', loadComponent: () => import('./todo/todo.component').then(m => m.TodoComponent) }];

