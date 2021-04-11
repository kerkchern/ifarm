import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-accept-work-listing',
  templateUrl: './accept-work-listing.component.html',
  styleUrls: ['./accept-work-listing.component.css']
})
export class AcceptWorkListingComponent implements OnInit {

  requests: [];
  listings: [];

  request = {
    requestId: '',
    farmId: '',
    name: '',
    fromDate : null,
    toDate : null,
    worker: '',
    status: ''
  }

  workerName = "";
  farmerName = "";

  constructor(
    private requestService: RequestService,
    public authentication: AuthenticationService,
    private dataService:DataService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.retrieveAllRequests();
    this.retrieveAllListings();
    console.log("init worker requests page..");

  }

  retrieveAllRequests(){

    this.farmerName = this.authentication.getUser();

    console.log('retrieve all requests...');
    this.requestService.get(`/farmListing/retrieve/request/${this.farmerName}`).subscribe(
      data => {
        this.requests = data as any;
        console.log(this.requests);
      }
    );
  }

  retrieveAllListings(){
    console.log('retrieve all listings...');
    this.requestService.get(`/farmListing/retrieve/booked/${this.farmerName}`).subscribe(
      data => {
        this.listings = data as any;
        console.log(data);
      }
    );
  }

  acceptRejectRequest(request, requestResponse){

    //console.log(this.authentication.getUser());

    var requestText = '';
    requestResponse === 'A'? requestText = 'Accept' : requestText = 'Reject';

    //this.workerName = this.authentication.getUser();
    console.log(request);
    request.status = requestResponse;

    console.log("request submitted..");
    if(!confirm("Are you sure to " + requestText + " request for [" + request.worker + "] as worker for [" + request.name + "] ?")) {
      request.status = "P";
      return
    }

    this.requestService.put(`/farmListing/request/accept`, request).subscribe(
      data => {
        this.request = data as any;
        console.log(this.request);
        this.ngOnInit();
      }
    );


  }

}
