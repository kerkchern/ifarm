import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-worker-monitor-plan',
  templateUrl: './worker-monitor-plan.component.html',
  styleUrls: ['./worker-monitor-plan.component.css']
})
export class WorkerMonitorPlanComponent implements OnInit {

  listings: [];

  listing = {
    monitorPlanId : null,
    farmId : null,
    remarks : '',
    riskLevel : '',
    mineralLevel : '',
    soilLevel : '',
    image: null
  }

  farmList = {
    farmId : null,
    name : ''
  }

  constructor(
    private requestService: RequestService,
    private dataService:DataService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.retrieveFarmListings();
    this.retrieveListings();
  }

  retrieveFarmListings(){
    this.requestService.get('/monitorPlan/getFarmList').subscribe(
      data => {
        this.farmList = data as any;
      }
    )
  }

  retrieveListings(){
    console.log('retrieve worker monitor plan...');
    this.requestService.get('/monitorPlan/retrieve').subscribe(
      data => {
        this.listings = data as any;
        console.log(this.listings);
      }
    );
  }

  createCropsFeedback(){
    this.dataService.setDataObj({isCreate : true, form : null});
    this.router.navigate(['workeraddcropsfeedbackplan']);
  }

  updateCropsFeedback(listing){
    this.dataService.setDataObj({isCreate : false, form : listing});
    this.router.navigate(['workeraddcropsfeedbackplan', listing.monitorPlanId]);
  }
}
