import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmerInventoryComponent } from './add-farmer-inventory.component';

describe('AddFarmerInventoryComponent', () => {
  let component: AddFarmerInventoryComponent;
  let fixture: ComponentFixture<AddFarmerInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFarmerInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFarmerInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
