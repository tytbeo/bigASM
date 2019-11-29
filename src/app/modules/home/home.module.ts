
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent,  
    pathMatch : 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BsDropdownModule.forRoot()
  ],
  declarations: [ 
    HomeComponent,
  ],
  exports : [RouterModule]
})
export class HomeModule {

}
