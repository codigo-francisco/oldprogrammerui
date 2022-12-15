import { TestBed } from '@angular/core/testing';

import { GeneralValidatorService } from './general-validator.service';

describe('GeneralValidatorService', () => {
  let service: GeneralValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
