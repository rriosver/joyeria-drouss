import { TestBed } from '@angular/core/testing';

import { JoyaService } from './joya.service';

describe('JoyaService', () => {
  let service: JoyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
