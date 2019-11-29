import { MusicService } from './../../../Services/music.service';
import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-top-track-list',
  templateUrl: './top-track-list.component.html',
  styleUrls: ['./top-track-list.component.scss']
})
export class TopTrackListComponent implements OnInit, OnChanges {

  @Input() artistId;
  listTracks : Array<any> = [];

  constructor( private musicS : MusicService ) { }

  ngOnInit() {
  }
  
  ngOnChanges(){
    this.musicS.getListTrackOfArtist(this.artistId).subscribe(data=>{
      console.log(data);
      this.listTracks = data.tracks;
    })
  }
  
}
