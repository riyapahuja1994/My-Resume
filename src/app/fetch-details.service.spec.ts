import { TestBed, inject } from '@angular/core/testing';

import { FetchDetailsService } from './fetch-details.service';

describe('FetchDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchDetailsService]
    });
  });

  it('should be created', inject([FetchDetailsService], (service: FetchDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
