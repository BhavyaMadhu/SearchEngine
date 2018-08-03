import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CInfoCardComponent } from './c-info-card.component';

describe('CInfoCardComponent', () => {
  let component: CInfoCardComponent;
  let fixture: ComponentFixture<CInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
