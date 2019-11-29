
import { ItemTodoComponent } from './to-do-list-v2/item-todo/item-todo.component';
import { ListTodoComponent } from './to-do-list-v2/list-todo/list-todo.component';
import { InputComponent } from './to-do-list-v2/input/input.component';
import { FormsModule } from '@angular/forms';
import { ToDoListV2Component } from './to-do-list-v2/to-do-list-v2.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListV1Component } from './to-do-list-v1/to-do-list-v1.component';

const routes: Routes = [
    {
        path: 'v1',
        component: ToDoListV1Component
    },
    {
        path: 'v2',
        component: ToDoListV2Component
    }
];

@NgModule({
    declarations: [
        ToDoListV1Component,
        ToDoListV2Component,
        InputComponent,
        ListTodoComponent, 
        ItemTodoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class toDoListRountingModule { }
