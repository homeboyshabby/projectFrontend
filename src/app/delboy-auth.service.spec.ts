import { TestBed } from '@angular/core/testing';

import { DelboyAuthService } from './delboy-auth.service';

describe('DelboyAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelboyAuthService = TestBed.get(DelboyAuthService);
    expect(service).toBeTruthy();
  });
});
