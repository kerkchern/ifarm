import { AuthenticationService } from './../../service/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-worker-listing',
  templateUrl: './worker-listing.component.html',
  styleUrls: ['./worker-listing.component.css']
})
export class WorkerListingComponent implements OnInit {

  listings: [];

  listing = {
    farmId : null,
    name: '',
    price : null,
    fromDate : null,
    toDate : null,
    area : '',
    type : '',
    book: '',
    pendingList: '',
    confirmList: '',
    image: null
  }

  farmId: number;
  workerName = "";

  constructor(
    private requestService: RequestService,
    public authentication: AuthenticationService,
    private dataService:DataService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.retrieveAllListings();
    console.log("init worker listing page..");

  }

  retrieveAllListings(){
    console.log('retrieve all listings...');
    this.requestService.get('/farmListing/retrieve/booked').subscribe(
      data => {
        this.listings = data as any;
        console.log(data);
      }
    );
  }

  isPendingOrConfirmed(username, listing){
    for(var val of listing.pendingList){
      if(val === username){
        return true;
      }
    }
    for(var val of listing.confirmList){
      if(val === username){
        return true;
      }
    }
    return false;
  }

  requestListing(form){

    console.log(this.authentication.getUser());

    this.workerName = this.authentication.getUser();

    console.log("request submitted..");
    if(!confirm("Are you sure to submit request for [" + form.name + "]?")) {
      return
    }

    this.requestService.put(`/farmListing/request/${form.farmId}/${this.workerName}`, form).subscribe(
      data => {
        this.listing = data as any;
        this.ngOnInit();
      }
    );


  }

}
