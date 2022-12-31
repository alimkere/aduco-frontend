import { TestBed } from '@angular/core/testing';

import { DocEmployeService } from './doc-employe.service';

describe('DocEmployeService', () => {
  let service: DocEmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocEmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
