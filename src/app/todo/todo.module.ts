import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodoComponent } from "./week-todo/week-todo.component";
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    // Tout ce dont mes vues ont besoins
    imports: [
        FormsModule,
        SharedModule,
        TodoRoutingModule,
        TodoComponent,
        WeekTodoComponent
    ],
    // Ce que je partage avec les autres
    exports: [],
    // Mes providers
    providers: []
})
export class TodoModule {}

