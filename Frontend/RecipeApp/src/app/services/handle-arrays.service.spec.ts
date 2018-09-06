import { TestBed, inject } from '@angular/core/testing';

import { HandleArraysService } from './handle-arrays.service';

describe('HandleArraysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleArraysService]
    });
  });

  it('should be created', inject([HandleArraysService], (service: HandleArraysService) => {
    expect(service).toBeTruthy();
  }));
});
