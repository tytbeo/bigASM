import { EmailService } from './../../../Services/email.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.scss']
})
export class MailDetailComponent implements OnInit ,OnChanges {

  @Input() idPost;
  mailDetail; 

  constructor(public mailSer : EmailService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.mailSer.getMail().subscribe( data=>{
      let detail = this.mailSer.getMailbyId(this.idPost,data);
      let p = detail.body.split("\n");
      p = p.map(ele=> `<p>${ele}</p>` );
      detail.body = p.join("");
      this.mailDetail = detail;
    });
  }

}
