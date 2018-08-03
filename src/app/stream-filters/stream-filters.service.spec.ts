import { TestBed, inject } from '@angular/core/testing';

import { StreamFiltersService } from './stream-filters.service';

describe('StreamFiltersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreamFiltersService]
    });
  });

  it('should be created', inject([StreamFiltersService], (service: StreamFiltersService) => {
    expect(service).toBeTruthy();
  }));
});
