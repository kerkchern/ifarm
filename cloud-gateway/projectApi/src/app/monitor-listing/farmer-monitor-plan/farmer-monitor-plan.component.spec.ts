import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMonitorPlanComponent } from './farmer-monitor-plan.component';

describe('FarmerMonitorPlanComponent', () => {
  let component: FarmerMonitorPlanComponent;
  let fixture: ComponentFixture<FarmerMonitorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMonitorPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMonitorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
