import { ShareModule } from './../share/share.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailAppComponent } from './email-app/email-app.component';
import { ListMailComponent } from './list-mail/list-mail.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';

const routes: Routes = [
  {
      path: '',
      component: EmailAppComponent
  },
  {
      path: ':typeLists',
      component: EmailAppComponent
  },
  {
    path: ':typeLists/:id',
    component: EmailAppComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EmailAppComponent, 
    ListMailComponent, 
    MailDetailComponent,],
  
})
export class EmailAppModule { }
