import { ShareModule } from './../share/share.module';
import { OrderByPipe } from './../../Pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { PhonePipePipe } from './../../Pipes/phone-pipe.pipe';
import { UserTableComponent } from './user-table.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component : UserTableComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [
    UserTableComponent,
  ],
  exports : [RouterModule]
})
export class UserTableModule {

}
