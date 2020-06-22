import { TestBed } from '@angular/core/testing';

import { GitHttpServiceService } from './git-http-service.service';

describe('GitHttpServiceService', () => {
  let service: GitHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
