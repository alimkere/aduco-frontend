import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocStudentComponent } from './doc-student.component';

describe('DocStudentComponent', () => {
  let component: DocStudentComponent;
  let fixture: ComponentFixture<DocStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
