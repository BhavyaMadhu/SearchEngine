import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFacultyComponent } from './c-faculty.component';

describe('CFacultyComponent', () => {
  let component: CFacultyComponent;
  let fixture: ComponentFixture<CFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
