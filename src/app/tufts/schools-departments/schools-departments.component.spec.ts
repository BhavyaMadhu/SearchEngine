import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsDepartmentsComponent } from './schools-departments.component';

describe('SchoolsDepartmentsComponent', () => {
  let component: SchoolsDepartmentsComponent;
  let fixture: ComponentFixture<SchoolsDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
