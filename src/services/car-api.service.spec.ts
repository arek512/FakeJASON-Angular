import { TestBed } from '@angular/core/testing';

import { CarApiService } from '../app/services/car-api.service';

describe('CarApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarApiService = TestBed.get(CarApiService);
    expect(service).toBeTruthy();
  });
});
