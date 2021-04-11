import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerListingComponent } from './farmer-listing.component';

describe('FarmerListingComponent', () => {
  let component: FarmerListingComponent;
  let fixture: ComponentFixture<FarmerListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
