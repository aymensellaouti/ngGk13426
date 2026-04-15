import { Component, inject } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { TodoApi } from "../model/todo-api";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent {
  todoService = inject(TodoService);
  /**
   * La liste des todos à afficher
   */
  todos = this.todoService.getTodos();

  todosApi: TodoApi[] = [];
  /**
   * Le todo à ajouter
   */
  todo = new Todo();

  toastr = inject(ToastrService);
  constructor() {
    this.todoService.getTodosFromApi().subscribe({
      next: (todoApis) => {
        this.todosApi = todoApis;
      },
      error: (e) => {
        this.toastr.error('il y a un problème merci de contacter l admin');
      },
      complete: () => {},
    });
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
