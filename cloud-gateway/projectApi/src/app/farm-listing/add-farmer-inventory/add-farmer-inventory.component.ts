import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-add-farmer-inventory',
  templateUrl: './add-farmer-inventory.component.html',
  styleUrls: ['./add-farmer-inventory.component.css']
})
export class AddFarmerInventoryComponent implements OnInit {

  farmId : '';

  form = {
    listingId: '',
    farmInventoryList: []
  }

  inventory = {
    farmid: null,
    inventId : null,
    name: '',
    price: '',
    unit : null
  }

  listing = {
    farmId : null,
    name: '',
    price : null,
    fromDate : null,
    toDate : null,
    area : '',
    type : '',
    book: '',
    image: null
  }

  constructor(private http:HttpClient,
    private requestService: RequestService,
    private dataService:DataService,
    private router:Router) { }

  ngOnInit(): void {
    this.listing = this.dataService.dataObj.form;
    console.log(this.listing);

    this.retrieveAllInventorys();
  }

  retrieveAllInventorys(){
    console.log('retrieve all inventorys...');
    this.farmId = this.listing.farmId;
    console.log(this.farmId);
    // this.requestService.get('/farmListing/inventory/retrieve').subscribe(
    //   data => {
    //     this.form.farmInventoryList = data as any;
    //     console.log(this.form.farmInventoryList);
    //   }
    // );
    this.requestService.get(`/farmListing/farmerInventory/retrieve/${this.farmId}`).subscribe(
      data => {
        this.form.farmInventoryList = data as any;
        console.log(this.form.farmInventoryList);
      }
    );
  }

  save(){
    console.log('submitting add inventory form..')

    this.form.listingId = this.listing.farmId;
    console.log(this.form);

    // if(!confirm("Are you sure to Book the following inventories? Changes are not allowed once it is submitted.")) {
    //   return
    // }

      this.requestService.post('/farmListing/farmerInventory/add', this.form).subscribe(
      data => {
        this.router.navigate(['farmerlisting']);
      }
    )
  }

}
