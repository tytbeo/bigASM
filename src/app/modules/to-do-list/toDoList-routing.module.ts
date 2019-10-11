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
        ToDoListV2Component
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
    ],
    exports: [RouterModule]
})

export class toDoListRountingModule { }
