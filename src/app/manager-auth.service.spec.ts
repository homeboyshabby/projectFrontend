import { TestBed } from '@angular/core/testing';

import { ManagerAuthService } from './manager-auth.service';

describe('ManagerAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerAuthService = TestBed.get(ManagerAuthService);
    expect(service).toBeTruthy();
  });
});
