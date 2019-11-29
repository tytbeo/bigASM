import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  userData = "";
  listUser = [
    "myself@angular.dev",
    "devgal@angular.dev",
    "devguy@angular.dev",
  ];

  constructor(private http : HttpClient) { 

  }

  public getMail(): Observable<any> {
    return this.http.get("./assets/data/messages.json");
  }

  public getSuiableEmail( folderName : string , messagesArray : Array<any>  ){
    return messagesArray.filter(mess=>mess.to == this.userData && mess.folder == folderName );
  }
  
  public getMailbyId( id : string , messagesArray : Array<any>  ){
    for(let mess of messagesArray){
      if(mess._id == id)return mess;
    }
  }
}
