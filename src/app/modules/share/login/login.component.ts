import { EmailService } from './../../../Services/email.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailName : string;

  constructor( private MailS : EmailService,
    private router : Router ) { }

  ngOnInit() {
  }

  changeAccount(){
    this.MailS.userData = this.emailName;
    sessionStorage.setItem("account" , this.emailName);
    this.router.navigate(["/mail"]);
  }
}
