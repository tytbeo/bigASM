import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FaTubeService {
  basedLink = 'https://www.googleapis.com/youtube/v3/search?part=snippet&';
  token = 'AIzaSyCrj2t1uw_MTyW66JoRF7lBLEC7fzdhLvU';
  constructor(private http : HttpClient) { }

  getDataFromUtube( queryParam : string ) : Observable<any> {
    let url = this.basedLink + queryParam + "&key=" + this.token;
    return this.http.get(url);
  }
}
