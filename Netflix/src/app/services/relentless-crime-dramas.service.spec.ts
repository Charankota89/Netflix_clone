import { TestBed } from '@angular/core/testing';

import { RelentlessCrimeDramasService } from './relentless-crime-dramas.service';

describe('RelentlessCrimeDramasService', () => {
  let service: RelentlessCrimeDramasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelentlessCrimeDramasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
