import { TestBed } from '@angular/core/testing';

import { ThrillerMoviesService } from './thriller-movies.service';

describe('ThrillerMoviesService', () => {
  let service: ThrillerMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThrillerMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
