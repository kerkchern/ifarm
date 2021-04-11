import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  listing = {
    farmId : null,
    name: '',
    price : null,
    fromDate : null,
    toDate : null,
    area : '',
    type : '',
    book: '',
    workerStatus: '',
    image: null
  }

  mode = null;
  MODE_CREATE = 'create';
  MODE_UPDATE = 'update';

  farmId: number;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  types = ['Crops','Flower','Fruits','Vegetables','Others'];

  constructor(private http:HttpClient,
    private requestService: RequestService,
    private dataService: DataService,
    private router:Router,
    private parserFormatter: NgbDateParserFormatter) { }

  ngOnInit(): void {
    console.log("isCreate: "+ this.dataService.dataObj.isCreate);

    if (this.dataService.dataObj && this.dataService.dataObj.isCreate === true){
      this.mode = this.MODE_CREATE;
      console.log("listing name: "+ this.listing.name);
    }else{
      this.mode = this.MODE_UPDATE;
      this.listing = this.dataService.dataObj.form;
      console.log("listing farmId: "+ this.listing.farmId);
      console.log("listing name: "+ this.listing.name);
      console.log(this.listing);

      this.fromDate =
        {year: parseInt(this.listing.fromDate.substring(0,4)),
         month: parseInt(this.listing.fromDate.substring(5,7)),
         day: parseInt(this.listing.fromDate.substring(8,10))};
      this.toDate =
        {year: parseInt(this.listing.toDate.substring(0,4)),
        month: parseInt(this.listing.toDate.substring(5,7)),
        day: parseInt(this.listing.toDate.substring(8,10))};
      //console.log(this.fromDate);
      this.listing.fromDate = this.fromDate;
      this.listing.toDate = this.toDate;
      //this.listing.toDate = new Date(this.listing.fromDate.year, this.listing.fromDate.month - 1, this.listing.fromDate.day);
      //console.log(this.listing.fromDate);

    }
    console.log("mode: "+ this.mode);
  }

  private dateToString = (date) => `${date.year}-${date.month}-${date.day}`;

  isModeCreate() : boolean{
    return (this.mode == this.MODE_CREATE);
  }

  onSubmit(form,mode){
    console.log(form.fromDate);
    console.log("mode: " + mode);

    if(form.fromDate === null || form.toDate === null){
      alert("Rent Start/End Date is empty. Please enter a date.");
      return;
    }

    form.fromDate = this.parserFormatter.format(form.fromDate);
    form.toDate = this.parserFormatter.format(form.toDate);

    if(form.fromDate > form.toDate || form.toDate < form.fromDate){
      alert("Invalid Rent Start to End Date.");
      return;
    }

    if(mode === true){

        console.log('submitting add listing form..')
        console.log(form);
        this.requestService.post('/farmListing/add', form).subscribe(
        data => {
          this.listing = data as any;
          this.router.navigate(['listing']);
        }
      )
    } else{
      this.farmId = this.listing.farmId;

      form.farmId = this.farmId;

      console.log(this.listing);
      console.log(form);

      this.requestService.put(`/farmListing/update/${this.farmId}`, form).subscribe(
        data => {
          this.listing = data as any;
          this.dataService.setDataObj({ form: this.listing})
          //this.errorMsg = this.listing.errMsg;
          //if(!this.errorMsg){
            this.router.navigate(['listing']);
          //}
        }
      );
    }

  }
}
