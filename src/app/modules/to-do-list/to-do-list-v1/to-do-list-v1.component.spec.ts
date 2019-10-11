import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListV1Component } from './to-do-list-v1.component';

describe('ToDoListV1Component', () => {
  let component: ToDoListV1Component;
  let fixture: ComponentFixture<ToDoListV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
