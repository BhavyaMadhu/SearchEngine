import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNonlinearGraphComponent } from './c-nonlinear-graph.component';

describe('CNonlinearGraphComponent', () => {
  let component: CNonlinearGraphComponent;
  let fixture: ComponentFixture<CNonlinearGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNonlinearGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNonlinearGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
