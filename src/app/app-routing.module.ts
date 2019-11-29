import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modules/share/login/login.component';
import { AuthGuard } from './Services/auth.guard';
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
  {
    path: 'user-table',
    loadChildren: './modules/user-table/user-table.module#UserTableModule' // Lazyload
  },
  {
    path: 'form',
    loadChildren: './modules/dynamic-form/dynamic-form.module#DynamicFormModule' // Lazyload
  },
  {
    path: 'music-store',
    loadChildren: './modules/music-store/music-store.module#MusicStoreModule' // Lazyload
  },
  {
    path: 'fa-tube',
    loadChildren: './modules/fatube/fatube.module#FAtubeModule' // Lazyload
  },
  {
    path: 'mail',
    canActivate : [AuthGuard],
    loadChildren: './modules/email-app/email-app.module#EmailAppModule' // Lazyload
  },
  {
    path: 'login',
    component : LoginComponent
  }
];

@NgModule({
  declarations : [
    LoginComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
