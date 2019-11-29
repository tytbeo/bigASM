import { EmailService } from './../../../Services/email.service';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-app',
  templateUrl: './email-app.component.html',
  styleUrls: ['./email-app.component.scss']
})
export class EmailAppComponent implements OnInit {

  
  tabChoosed = 1;
  forderList = [ "inbox", 'finance', 'travel', 'personal', 'spam', 'drafts', 'sent' ];
  folderChoosed : string ;
  idPost : number;

  constructor( public mailSer : EmailService,
    public ActivatedRoute : ActivatedRoute,
    private router : Router ) {

  }

  ngOnInit() {

    this.ActivatedRoute.params.subscribe(data=>{
      this.folderChoosed = data.typeLists;
      this.idPost = data.id;
    });

  }

  logOuttt(){
    this.mailSer.userData = "";
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

}
