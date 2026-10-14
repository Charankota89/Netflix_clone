import { TestBed } from '@angular/core/testing';

import { TvActionAndAdventureService } from './tv-action-and-adventure.service';

describe('TvActionAndAdventureService', () => {
  let service: TvActionAndAdventureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvActionAndAdventureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
