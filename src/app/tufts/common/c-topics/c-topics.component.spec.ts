import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTopicsComponent } from './c-topics.component';

describe('CTopicsComponent', () => {
  let component: CTopicsComponent;
  let fixture: ComponentFixture<CTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
