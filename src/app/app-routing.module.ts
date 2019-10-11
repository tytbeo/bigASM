import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule' // Lazyload
  },
  {
    path: 'to-do-list',
    loadChildren: './modules/to-do-list/to-do-list.module#ToDoListModule' // Lazyload
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
