import { MusicService } from './../../../Services/music.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit , OnChanges {

  @Input() key : string;
  artistList : Array<any> = [];
  constructor( private musicS : MusicService ) { }

  ngOnInit() {

  }

  ngOnChanges(){
    this.musicS.getArtistsByKey(this.key , 6).subscribe(data=>{
      this.artistList = data.artists.items;
      
    })
  }

}
