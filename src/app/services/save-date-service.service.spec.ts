import { TestBed } from '@angular/core/testing';

import { SaveDateServiceService } from './save-date-service.service';

describe('SaveDateServiceService', () => {
  let service: SaveDateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveDateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
