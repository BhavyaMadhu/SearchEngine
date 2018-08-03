import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CResearchComponent } from './c-research.component';

describe('CResearchComponent', () => {
  let component: CResearchComponent;
  let fixture: ComponentFixture<CResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
