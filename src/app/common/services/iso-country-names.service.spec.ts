import { TestBed, inject } from '@angular/core/testing';

import { IsoCountryNamesService } from './iso-country-names.service';

describe('IsoCountryNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsoCountryNamesService]
    });
  });

  it('should be created', inject([IsoCountryNamesService], (service: IsoCountryNamesService) => {
    expect(service).toBeTruthy();
  }));
});
