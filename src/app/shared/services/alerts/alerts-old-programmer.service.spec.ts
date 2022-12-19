import { TestBed } from '@angular/core/testing';

import { AlertsOldProgrammerService } from './alerts-old-programmer.service';

describe('AlertsOldProgrammerService', () => {
  let service: AlertsOldProgrammerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertsOldProgrammerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
