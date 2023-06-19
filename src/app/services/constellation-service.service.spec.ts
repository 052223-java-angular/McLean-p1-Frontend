import { TestBed } from '@angular/core/testing';

import { ConstellationServiceService } from './constellation-service.service';

describe('ConstellationServiceService', () => {
  let service: ConstellationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstellationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
