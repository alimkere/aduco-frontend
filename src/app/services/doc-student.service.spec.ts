import { TestBed } from '@angular/core/testing';

import { DocStudentService } from './doc-student.service';

describe('DocStudentService', () => {
  let service: DocStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
