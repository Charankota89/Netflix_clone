import { TestBed } from '@angular/core/testing';

import { IndianTvComediesService } from './indian-tv-comedies.service';

describe('IndianTvComediesService', () => {
  let service: IndianTvComediesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndianTvComediesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
