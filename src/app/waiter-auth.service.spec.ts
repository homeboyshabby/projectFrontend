import { TestBed } from '@angular/core/testing';

import { WaiterAuthService } from './waiter-auth.service';

describe('WaiterAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaiterAuthService = TestBed.get(WaiterAuthService);
    expect(service).toBeTruthy();
  });
});
