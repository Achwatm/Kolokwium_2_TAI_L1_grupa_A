import { TestBed } from '@angular/core/testing';

import { MADataService } from './ma-data.service';

describe('MADataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MADataService = TestBed.get(MADataService);
    expect(service).toBeTruthy();
  });
});
