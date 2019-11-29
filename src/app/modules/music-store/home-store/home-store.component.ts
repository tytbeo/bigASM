import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-store',
  templateUrl: './home-store.component.html',
  styleUrls: ['./home-store.component.scss']
})
export class HomeStoreComponent implements OnInit {

  searchKey : string;
  
  KeyParams : string;
  artistId : string;

  constructor( private router : Router,
    private ActivatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(data=>{
      this.KeyParams = data.searchKey;
      this.artistId = data.artist;
    })
  }

  searchArtist(){
    this.router.navigateByUrl(`/music-store/${this.searchKey}`);
    this.KeyParams = this.searchKey;
    this.searchKey = "";
  }
}
