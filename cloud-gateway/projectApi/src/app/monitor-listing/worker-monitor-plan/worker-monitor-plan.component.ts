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
    farmId : null,
    name: '',
    price : null,
    fromDate : null,
    toDate : null,
    area : '',
    type : '',
    isBook: '',
    bookedBy: '',
    pendingList: '',
    confirmList: '',
    image: null
  }

  constructor(
    private requestService: RequestService,
    private dataService:DataService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.retrieveListings();
  }

  retrieveListings(){
    console.log('retrieve worker monitor plan...');
    this.requestService.get('/farmListing/retrieve').subscribe(
      data => {
        this.listings = data as any;
        console.log(this.listings);
      }
    );
  }

  updateStatus(listing){
    this.dataService.setDataObj({form : listing});
    this.router.navigate(['updatemonitorplan', listing.farmId]);
  }

}
