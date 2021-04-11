import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-farmer-listing',
  templateUrl: './farmer-listing.component.html',
  styleUrls: ['./farmer-listing.component.css']
})
export class FarmerListingComponent implements OnInit {

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

  viewListing(listing){
    this.dataService.setDataObj({form : listing});
    this.router.navigate(['viewlisting', listing.farmId]);
  }

  addInventory(listing){
    this.router.navigate(['addInventory', listing.farmId]);
  }

}
