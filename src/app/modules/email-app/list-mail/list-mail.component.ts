import { EmailService } from './../../../Services/email.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list-mail',
  templateUrl: './list-mail.component.html',
  styleUrls: ['./list-mail.component.scss']
})
export class ListMailComponent implements OnInit , OnChanges {

  @Input() folderName :string;
  @Input() idPost: string;
  mailList : Array <any>;
  preFolder;
  
  constructor(public mailSer : EmailService) {

  }

  ngOnChanges(){
    if( this.preFolder != this.folderName ){
      this.mailSer.getMail().subscribe( data=>{
        this.mailList = this.mailSer.getSuiableEmail(this.folderName,data);
        console.log(this.mailList);
      });
    }
    this.preFolder = this.folderName;
  }

  ngOnInit() {
    
  }

}
