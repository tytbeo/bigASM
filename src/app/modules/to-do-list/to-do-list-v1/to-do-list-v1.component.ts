import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-v1',
  templateUrl: './to-do-list-v1.component.html',
  styleUrls: ['./to-do-list-v1.component.scss']
})
export class ToDoListV1Component implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  listTodo = [];
  todoText : String;

  addTodo(){
    if(this.todoText == '')return;
    this.listTodo.push({
      text : this.todoText,
      done : false
    });
    this.todoText = "";
  }
  removeTodo(i){
    this.listTodo.splice(i,1);
  }
}
