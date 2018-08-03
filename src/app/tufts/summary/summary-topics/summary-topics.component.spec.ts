import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTopicsComponent } from './summary-topics.component';

describe('SummaryTopicsComponent', () => {
  let component: SummaryTopicsComponent;
  let fixture: ComponentFixture<SummaryTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
