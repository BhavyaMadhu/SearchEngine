import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFacultyComponent } from './summary-faculty.component';

describe('SummaryFacultyComponent', () => {
  let component: SummaryFacultyComponent;
  let fixture: ComponentFixture<SummaryFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
