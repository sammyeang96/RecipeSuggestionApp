import { TestBed, inject } from '@angular/core/testing';

import { PantryService } from './pantry.service';

describe('PantryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PantryService]
    });
  });

  it('should be created', inject([PantryService], (service: PantryService) => {
    expect(service).toBeTruthy();
  }));
});
