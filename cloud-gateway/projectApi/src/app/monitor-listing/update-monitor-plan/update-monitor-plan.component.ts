import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-update-monitor-plan',
  templateUrl: './update-monitor-plan.component.html',
  styleUrls: ['./update-monitor-plan.component.css']
})
export class UpdateMonitorPlanComponent implements OnInit {

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

  farmId: number;

  types = ['Crops','Flower','Fruits','Vegetables','Others'];

  constructor(private http:HttpClient,
    private requestService: RequestService,
    private dataService: DataService,
    private router:Router,
    private parserFormatter: NgbDateParserFormatter) { }

  ngOnInit(): void {

      this.listing = this.dataService.dataObj.form;
      console.log("listing farmId: "+ this.listing.farmId);
      console.log("listing name: "+ this.listing.name);
      this.farmId = this.listing.farmId;
      console.log(this.listing);
      this.retrieveMonitorPlan();

  }

  retrieveMonitorPlan() {
    console.log(this.farmId);
    this.requestService.get(`/monitorplan/retrieve/${this.farmId}`).subscribe(
      data => {
        this.listing = data as any;
      }
    );
  }

  onSubmit(form){
    console.log(form.fromDate);

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


        console.log('submitting add listing form..')
        console.log(form);
        this.requestService.post('/farmListing/add', form).subscribe(
        data => {
          this.listing = data as any;
          this.router.navigate(['listing']);
        }
      );
    }
}
