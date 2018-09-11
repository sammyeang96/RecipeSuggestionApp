import { TestBed, inject } from '@angular/core/testing';

import { SearchAlgorithmService } from './search-algorithm.service';

describe('SearchAlgorithmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchAlgorithmService]
    });
  });

  it('should be created', inject([SearchAlgorithmService], (service: SearchAlgorithmService) => {
    expect(service).toBeTruthy();
  }));
});
