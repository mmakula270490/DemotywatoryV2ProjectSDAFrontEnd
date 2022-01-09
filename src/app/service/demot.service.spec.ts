import { TestBed } from '@angular/core/testing';

import { DemotService } from './demot.service';

describe('DemotService', () => {
  let service: DemotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
