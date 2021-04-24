import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ListingComponent } from './farm-listing/listing/listing.component';
import { MonitorPlanComponent } from './monitor-planning/monitor-plan/monitor-plan.component';
import { AddListingComponent } from './farm-listing/add-listing/add-listing.component';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FarmerListingComponent } from './farm-listing/farmer-listing/farmer-listing.component';
import { ViewListingComponent } from './farm-listing/view-listing/view-listing.component';
import { WorkerListingComponent } from './farm-listing/worker-listing/worker-listing.component';
import { AcceptWorkListingComponent } from './farm-listing/accept-work-listing/accept-work-listing.component';
import { InventoryComponent } from './farm-listing/inventory/inventory.component';
import { AddInventoryComponent } from './farm-listing/add-inventory/add-inventory.component';
import { AddFarmerInventoryComponent } from './farm-listing/add-farmer-inventory/add-farmer-inventory.component';
<<<<<<< HEAD
import { FarmerMonitorPlanComponent } from './monitor-listing/farmer-monitor-plan/farmer-monitor-plan.component';

=======
import { WorkerMonitorPlanComponent } from './monitor-listing/worker-monitor-plan/worker-monitor-plan.component';
import { WorkerAddCropsFeedbackComponent } from './monitor-listing/worker-add-crops-feedback/worker-add-crops-feedback.component';
>>>>>>> 7f519f140c0c163e3998bde4fbd34f338b475ea2

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ListingComponent,
    MonitorPlanComponent,
    AddListingComponent,
    FarmerListingComponent,
    ViewListingComponent,
    WorkerListingComponent,
    AcceptWorkListingComponent,
    InventoryComponent,
    AddInventoryComponent,
    AddFarmerInventoryComponent,
<<<<<<< HEAD
    FarmerMonitorPlanComponent
=======
    WorkerMonitorPlanComponent,
    WorkerAddCropsFeedbackComponent,
>>>>>>> 7f519f140c0c163e3998bde4fbd34f338b475ea2
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
