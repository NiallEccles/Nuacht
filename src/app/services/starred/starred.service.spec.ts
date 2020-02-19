import { TestBed } from '@angular/core/testing';

import { StarredService } from './starred.service';

describe('StarredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarredService = TestBed.get(StarredService);
    expect(service).toBeTruthy();
  });
});
