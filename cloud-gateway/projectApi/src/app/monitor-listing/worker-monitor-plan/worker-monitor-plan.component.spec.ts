import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerMonitorPlanComponent } from './worker-monitor-plan.component';

describe('WorkerMonitorPlanComponent', () => {
  let component: WorkerMonitorPlanComponent;
  let fixture: ComponentFixture<WorkerMonitorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerMonitorPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerMonitorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
