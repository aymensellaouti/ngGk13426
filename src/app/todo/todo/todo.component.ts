import { Component, inject } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";

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
  /**
   * Le todo à ajouter
   */
  todo = new Todo();
  constructor() {}
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
