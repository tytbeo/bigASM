import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.model));
  }
}
