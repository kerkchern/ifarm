import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventorys: [];

  inventory = {
    inventId : null,
    name: '',
    price : null
  }

  constructor(private requestService: RequestService,
    private router: Router,) { }

  ngOnInit(): void {
    this.retrieveAllInventorys();

  }

  retrieveAllInventorys(){
    console.log('retrieve all inventorys...');
    this.requestService.get('/farmListing/inventory/retrieve').subscribe(
      data => {
        this.inventorys = data as any;
        console.log(data);
      }
    );
  }

  addInventory(){
    this.router.navigate(['addinventory']);
  }

  deleteInventory(inventId){
    if(!confirm("Are you sure to delete this inventory?")) {
      return
    }
    console.log("delete inventory..");
    this.requestService.delete(`/farmListing/inventory/delete/${inventId}`).subscribe(
      data => {
        // this.listing = data as any;
        // console.log(this.listing);
        this.inventory = data as any;
        this.retrieveAllInventorys();
      }
    );
  }
}
