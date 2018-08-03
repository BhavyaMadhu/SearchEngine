import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCoursesComponent } from './c-courses.component';

describe('CCoursesComponent', () => {
  let component: CCoursesComponent;
  let fixture: ComponentFixture<CCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
