import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CWorldMapComponent } from './c-world-map.component';

describe('CWorldMapComponent', () => {
  let component: CWorldMapComponent;
  let fixture: ComponentFixture<CWorldMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CWorldMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CWorldMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
