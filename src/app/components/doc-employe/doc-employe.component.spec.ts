import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocEmployeComponent } from './doc-employe.component';

describe('DocEmployeComponent', () => {
  let component: DocEmployeComponent;
  let fixture: ComponentFixture<DocEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
