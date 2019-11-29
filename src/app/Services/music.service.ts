import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class MusicService {

  private token : string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.token
    })
  };

  currentArtist : Object;

  constructor( private http : HttpClient,
    private router : Router) { 
      this.token = localStorage.getItem('sotifyToken') ? localStorage.getItem('sotifyToken') : '';
    }
  
  getData( url ) : Observable<any> {
    return this.http.get( encodeURI(url), this.httpOptions).pipe(
      catchError( ( error : HttpErrorResponse ) => {
        console.log(error);
        let token = prompt("Please enter new token");
        this.token = 'Bearer ' + token.trim();
        localStorage.setItem('sotifyToken' , this.token );
        this.httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.token
          })
        };
        this.router.navigateByUrl("/music-store");
        return throwError('Loi roi');
      })
    );
  }

  getArtistsByKey( key , limit ) : Observable<any> {
    return this.getData( `https://api.spotify.com/v1/search?q=${key}&type=artist&limit=${limit}` );
  }

  getListTrackOfArtist( artistId ){
    return this.getData( `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US` );
  }

  millisToMinutesAndSeconds(ms) {
    ms = 1000*Math.round(ms/1000); // round to nearest second
    var d = new Date(ms);
    return ( d.getUTCMinutes() + ':' + d.getUTCSeconds() );
  }
}
