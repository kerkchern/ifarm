import { AuthenticationService } from './../../service/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit {

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

  mode = null;

  farmId: number;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  types = ['Crops','Flower','Fruits','Vegetables','Others'];

  bookedBy = '';

  constructor(private http:HttpClient,
    private requestService: RequestService,
    public authentication: AuthenticationService,
    private dataService: DataService,
    private router:Router,
    private parserFormatter: NgbDateParserFormatter) { }

  ngOnInit(): void {
      this.listing = this.dataService.dataObj.form;

      this.fromDate =
        {year: parseInt(this.listing.fromDate.substring(0,4)),
         month: parseInt(this.listing.fromDate.substring(5,7)),
         day: parseInt(this.listing.fromDate.substring(8,10))};
      this.toDate =
        {year: parseInt(this.listing.toDate.substring(0,4)),
        month: parseInt(this.listing.toDate.substring(5,7)),
        day: parseInt(this.listing.toDate.substring(8,10))};

      this.listing.fromDate = this.fromDate;
      this.listing.toDate = this.toDate;


  }

  onSubmit(form){

        form.fromDate = this.parserFormatter.format(form.fromDate);
        form.toDate = this.parserFormatter.format(form.toDate);

        this.farmId = this.listing.farmId;

        form.farmId = this.farmId;

        this.bookedBy = this.authentication.getUser();

        if(!confirm("Are you sure you want to book [" + form.name + "]  ?")) {
          return
        }

        console.log("confirm book farm");
        console.log(form);
        this.requestService.put(`/farmListing/book/${this.farmId}/${this.bookedBy}`, form).subscribe(
          data => {
            this.listing = data as any;
            this.dataService.setDataObj({ form: this.listing})
            this.router.navigate(['farmerlisting']);
          }
        );
  }
}
