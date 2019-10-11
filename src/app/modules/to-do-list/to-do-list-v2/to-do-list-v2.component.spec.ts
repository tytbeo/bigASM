import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListV2Component } from './to-do-list-v2.component';

describe('ToDoListV2Component', () => {
  let component: ToDoListV2Component;
  let fixture: ComponentFixture<ToDoListV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
