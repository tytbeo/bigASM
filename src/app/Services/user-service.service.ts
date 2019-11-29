import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,
  ) {

  }
  public getUsersData(): Observable<any> {
    return this.http.get("./assets/data/users.json");
  }
}
