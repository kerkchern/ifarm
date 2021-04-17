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

  form = {
    listingId: '',
    farmInventoryList: []
  }
  

  inventory = {
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
    this.requestService.get('/farmListing/inventory/retrieve').subscribe(
      data => {
        this.form.farmInventoryList = data as any;
        console.log(this.form.farmInventoryList);
      }
    );
  }

  save(){
    console.log('submitting add inventory form..')
    this.form.listingId = this.listing.farmId;
      this.requestService.put('/farmListing/farmerInventory/add', this.form).subscribe(
      data => {
        this.form = data as any;
        console.log(this.form);
        this.router.navigate(['farmerlisting']);
      }
    )
  }

}
