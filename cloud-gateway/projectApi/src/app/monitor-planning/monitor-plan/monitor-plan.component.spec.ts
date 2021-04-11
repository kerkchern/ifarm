import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorPlanComponent } from './monitor-plan.component';

describe('MonitorPlanComponent', () => {
  let component: MonitorPlanComponent;
  let fixture: ComponentFixture<MonitorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
