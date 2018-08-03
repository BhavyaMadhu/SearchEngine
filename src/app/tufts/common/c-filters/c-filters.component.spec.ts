import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFiltersComponent } from './c-filters.component';

describe('CFiltersComponent', () => {
  let component: CFiltersComponent;
  let fixture: ComponentFixture<CFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
