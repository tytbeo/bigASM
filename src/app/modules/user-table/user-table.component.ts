import { UserServiceService } from './../../Services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  listKey : any;
  users : any;
  orderKey : any ;
  order : string = "ascending";
  constructor(private userService : UserServiceService) {

  }

  ngOnInit( ) {
    this.getUser();
  }

  getUser(){
    this.userService.getUsersData().subscribe(data=>{
      this.users = data;
      this.listKey = Object.keys(data[0]);
      this.orderKey = this.listKey[0];
    });
  }

}
