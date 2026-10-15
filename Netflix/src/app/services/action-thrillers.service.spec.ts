import { TestBed } from '@angular/core/testing';

import { ActionThrillersService } from './action-thrillers.service';

describe('ActionThrillersService', () => {
  let service: ActionThrillersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionThrillersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
