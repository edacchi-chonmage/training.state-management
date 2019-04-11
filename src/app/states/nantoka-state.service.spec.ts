import { TestBed } from '@angular/core/testing';

import { NantokaStateService } from './nantoka-state.service';

describe('NantokaStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NantokaStateService = TestBed.get(NantokaStateService);
    expect(service).toBeTruthy();
  });
});
