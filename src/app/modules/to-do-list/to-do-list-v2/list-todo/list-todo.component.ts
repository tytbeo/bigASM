import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() listTodo;

  removeTodo(i){
    this.listTodo.splice(i,1);
  }
  
}
