import { TestBed } from '@angular/core/testing';

import { CountSLserviceService } from './count-slservice.service';

describe('CountSLserviceService', () => {
  let service: CountSLserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountSLserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
