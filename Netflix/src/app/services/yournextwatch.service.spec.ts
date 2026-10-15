import { TestBed } from '@angular/core/testing';

import { YournextwatchService } from './yournextwatch.service';

describe('YournextwatchService', () => {
  let service: YournextwatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YournextwatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
