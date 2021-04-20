import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonitorPlanComponent } from './update-monitor-plan.component';

describe('UpdateMonitorPlanComponent', () => {
  let component: UpdateMonitorPlanComponent;
  let fixture: ComponentFixture<UpdateMonitorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMonitorPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMonitorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
