import { TestBed } from '@angular/core/testing';

import { MadeinindiaService } from './madeinindia.service';

describe('MadeinindiaService', () => {
  let service: MadeinindiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadeinindiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
