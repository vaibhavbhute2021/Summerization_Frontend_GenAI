import { TestBed } from '@angular/core/testing';

import { Summerization } from './summerization';

describe('Summerization', () => {
  let service: Summerization;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Summerization);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
