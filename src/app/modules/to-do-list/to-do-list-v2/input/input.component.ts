import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() transferData = new EventEmitter ();
  todoText : String;

  addTodo(){
    let data = {
      text : this.todoText,
      done : false
    };
    this.transferData.emit( data );
    this.todoText = "";
  }
}
