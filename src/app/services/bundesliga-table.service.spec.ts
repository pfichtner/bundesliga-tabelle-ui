import { TestBed } from '@angular/core/testing';

import { BundesligaTableService } from './bundesliga-table.service';

describe('BundesligaTableService', () => {
  let service: BundesligaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundesligaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
