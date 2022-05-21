import { TestBed } from '@angular/core/testing';

import { GsmValuesService } from './gsm-values.service';

describe('GsmValuesService', () => {
  let service: GsmValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsmValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
