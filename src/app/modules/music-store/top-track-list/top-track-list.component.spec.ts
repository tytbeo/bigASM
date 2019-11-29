import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrackListComponent } from './top-track-list.component';

describe('TopTrackListComponent', () => {
  let component: TopTrackListComponent;
  let fixture: ComponentFixture<TopTrackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTrackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
