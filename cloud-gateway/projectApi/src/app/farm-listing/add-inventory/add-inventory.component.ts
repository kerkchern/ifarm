import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  inventory = {
    inventId : null,
    name: '',
    price : null
  }

  constructor(private http:HttpClient,
    private requestService: RequestService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log('submitting add inventory form..')
        console.log(form);
        this.requestService.post('/farmListing/inventory/add', form).subscribe(
        data => {
          this.inventory = data as any;
          this.router.navigate(['inventory']);
        }
      )
  }

}
