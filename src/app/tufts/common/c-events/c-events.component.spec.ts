import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEventsComponent } from './c-events.component';

describe('CEventsComponent', () => {
  let component: CEventsComponent;
  let fixture: ComponentFixture<CEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
