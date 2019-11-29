import { PhonePipePipe } from './../../Pipes/phone-pipe.pipe';
import { OrderByPipe } from './../../Pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OrderByPipe,
    PhonePipePipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    OrderByPipe,
    PhonePipePipe
  ]
})
export class ShareModule { }
