import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.scss']
})
export class ItemTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
  @Input() todo ;
  @Input() index ;
  @Output() passIdx = new EventEmitter();


}
