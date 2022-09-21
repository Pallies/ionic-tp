import { TestBed } from '@angular/core/testing';

import { SaisieFormService } from './saisie-form.service';

describe('SaisieFormService', () => {
  let service: SaisieFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaisieFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
