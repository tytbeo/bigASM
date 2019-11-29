import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'template',
    component : TemplateDrivenFormComponent
  },
  {
    path: 'reactive',
    component : ReactiveFormComponent
  },
];


@NgModule({
  declarations: [TemplateDrivenFormComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports : [RouterModule]
})
export class DynamicFormModule { }
