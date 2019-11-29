import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaTubeHomeComponent } from './fa-tube-home.component';

describe('FaTubeHomeComponent', () => {
  let component: FaTubeHomeComponent;
  let fixture: ComponentFixture<FaTubeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaTubeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaTubeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
