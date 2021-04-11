import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptWorkListingComponent } from './accept-work-listing.component';

describe('AcceptWorkListingComponent', () => {
  let component: AcceptWorkListingComponent;
  let fixture: ComponentFixture<AcceptWorkListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptWorkListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptWorkListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
