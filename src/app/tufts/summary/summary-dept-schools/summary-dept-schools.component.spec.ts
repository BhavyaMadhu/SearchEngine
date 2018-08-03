import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDeptSchoolsComponent } from './summary-dept-schools.component';

describe('SummaryDeptSchoolsComponent', () => {
  let component: SummaryDeptSchoolsComponent;
  let fixture: ComponentFixture<SummaryDeptSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryDeptSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDeptSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
