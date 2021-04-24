import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-farmer-monitor-plan',
  templateUrl: './farmer-monitor-plan.component.html',
  styleUrls: ['./farmer-monitor-plan.component.css']
})
export class FarmerMonitorPlanComponent implements OnInit {

  listings: [];
  listing = {
    farmId: '',
    farmName: '',
    remarks: '',
    riskLevel : '',
    mineralLevel : '',
    soilLevel: ''
  }

  farmerName = this.authentication.getUser();

  constructor(
    private requestService: RequestService,
    public authentication: AuthenticationService,
    private dataService:DataService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.retrieveAllListings();
  }

  retrieveAllListings(){
    console.log('retrieve farmer monitor plans...');
    this.requestService.get(`/monitorPlan/getfarmerlisting/${this.farmerName}`).subscribe(
      data => {
        this.listings = data as any;
        console.log(data);
      }
    );
  }

}
