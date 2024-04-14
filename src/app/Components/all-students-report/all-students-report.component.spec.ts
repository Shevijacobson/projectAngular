import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsReportComponent } from './all-students-report.component';

describe('AllStudentsReportComponent', () => {
  let component: AllStudentsReportComponent;
  let fixture: ComponentFixture<AllStudentsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllStudentsReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllStudentsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
