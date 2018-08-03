import { TestBed, inject } from '@angular/core/testing';

import { MockStreamMapService } from './mock-stream-map-service.service';

describe('MockStreamMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockStreamMapService]
    });
  });

  it('should be created', inject([MockStreamMapService], (service: MockStreamMapService) => {
    expect(service).toBeTruthy();
  }));
});
