import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeStoreComponent } from './home-store/home-store.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { TopTrackListComponent } from './top-track-list/top-track-list.component';

const routes: Routes = [
  {
      path: '',
      component: HomeStoreComponent
  },
  {
      path: ':searchKey',
      component: HomeStoreComponent
  },
  {
    path: ':searchKey/:artist',
    component: HomeStoreComponent
  },
];

@NgModule({
  declarations: [HomeStoreComponent, ArtistListComponent, TopTrackListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class MusicStoreModule { }
