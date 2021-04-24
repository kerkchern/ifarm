

import { RouteGuardService } from './service/route-guard.service';
import { ListingComponent } from './farm-listing/listing/listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { MonitorPlanComponent } from './monitor-planning/monitor-plan/monitor-plan.component';
import { AddListingComponent } from './farm-listing/add-listing/add-listing.component';
import { FarmerListingComponent } from './farm-listing/farmer-listing/farmer-listing.component';
import { ViewListingComponent } from './farm-listing/view-listing/view-listing.component';
import { WorkerListingComponent } from './farm-listing/worker-listing/worker-listing.component';
import { AcceptWorkListingComponent } from './farm-listing/accept-work-listing/accept-work-listing.component';
import { InventoryComponent } from './farm-listing/inventory/inventory.component';
import { AddInventoryComponent } from './farm-listing/add-inventory/add-inventory.component';
import { AddFarmerInventoryComponent } from './farm-listing/add-farmer-inventory/add-farmer-inventory.component';
import { FarmerMonitorPlanComponent } from './monitor-listing/farmer-monitor-plan/farmer-monitor-plan.component';
import { WorkerMonitorPlanComponent } from './monitor-listing/worker-monitor-plan/worker-monitor-plan.component';
import { WorkerAddCropsFeedbackComponent} from './monitor-listing/worker-add-crops-feedback/worker-add-crops-feedback.component'

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[RouteGuardService]},
  {path: 'listing', component: ListingComponent, canActivate:[RouteGuardService]},
  {path: 'farmerlisting', component: FarmerListingComponent, canActivate:[RouteGuardService]},
  {path: 'workerlisting', component: WorkerListingComponent, canActivate:[RouteGuardService]},
  {path: 'acceptworklisting', component: AcceptWorkListingComponent, canActivate:[RouteGuardService]},
  {path: 'viewlisting/:farmId', component: ViewListingComponent, canActivate:[RouteGuardService]},
  {path: 'addlisting', component: AddListingComponent, canActivate:[RouteGuardService]},
  {path: 'addlisting/:farmId', component: AddListingComponent, canActivate:[RouteGuardService]},
  {path: 'inventory', component: InventoryComponent, canActivate:[RouteGuardService]},
  {path: 'addinventory', component: AddInventoryComponent, canActivate:[RouteGuardService]},
  {path: 'addfarmerinventory/:farmId', component: AddFarmerInventoryComponent, canActivate:[RouteGuardService]},
  {path: 'monitorplan', component: MonitorPlanComponent, canActivate:[RouteGuardService]},
  {path: 'farmermonitorplan', component: FarmerMonitorPlanComponent, canActivate:[RouteGuardService]},
  {path: 'workermonitorplan', component:WorkerMonitorPlanComponent, canActivate:[RouteGuardService]},
  {path: 'workeraddcropsfeedbackplan', component:WorkerAddCropsFeedbackComponent, canActivate:[RouteGuardService]},
  {path: 'workeraddcropsfeedbackplan/:monitorPlanId', component:WorkerAddCropsFeedbackComponent, canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
