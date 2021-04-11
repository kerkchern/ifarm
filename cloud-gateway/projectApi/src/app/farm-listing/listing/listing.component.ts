import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

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
    pendingList: '',
    confirmList: '',
    image: null
  }

  constructor(
    private requestService: RequestService,
    private dataService:DataService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.retrieveAllListings();

  }

  retrieveAllListings(){
    console.log('retrieve all listings...');
    this.requestService.get('/farmListing/retrieve').subscribe(
      data => {
        this.listings = data as any;
        console.log(data);
      }
    );
  }

  addListing(){
    this.dataService.setDataObj({isCreate : true, form : null});
    this.router.navigate(['addlisting']);
  }

  updateListing(listing){
    this.dataService.setDataObj({isCreate : false, form : listing});
    this.router.navigate(['addlisting', listing.farmId]);
  }

  deleteListing(id){
    if(!confirm("Are you sure to delete this listing?")) {
      return
    }
    console.log("delete listing..");
    this.requestService.delete(`/farmListing/delete/${id}`).subscribe(
      data => {
        // this.listing = data as any;
        // console.log(this.listing);
        this.listing = data as any;
        this.retrieveAllListings();
      }
    );
  }

}
