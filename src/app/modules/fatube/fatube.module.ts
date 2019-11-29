import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaTubeHomeComponent } from './fa-tube-home/fa-tube-home.component';
import {MatSelectModule} from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  {
      path: '',
      component: FaTubeHomeComponent
  }
];

@NgModule({
  declarations: [FaTubeHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ]
})
export class FAtubeModule { }
