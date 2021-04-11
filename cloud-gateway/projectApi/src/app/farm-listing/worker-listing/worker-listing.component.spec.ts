import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerListingComponent } from './worker-listing.component';

describe('WorkerListingComponent', () => {
  let component: WorkerListingComponent;
  let fixture: ComponentFixture<WorkerListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
