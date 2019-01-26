import { TestBed } from '@angular/core/testing';

import { NgEnvironmenterService } from './ng-environmenter.service';

describe('NgEnvironmenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgEnvironmenterService = TestBed.get(NgEnvironmenterService);
    expect(service).toBeTruthy();
  });
});
