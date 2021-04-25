import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';

  countType: [];

  cropsCount: number;
  flowerCount: number;
  fruitsCount: number;
  vegetableCount: number;
  othersCount: number;


  //countType: Map<string, number>;

  doughnutChartLabels: Label[];
  doughnutChartData: MultiDataSet = [
    []
  ];
  doughnutChartType: ChartType;


  constructor(private authService: AuthenticationService,
              private requestService: RequestService,
              private http: HttpClient) { }

  ngOnInit(): void {

    this.username = this.authService.getUser();
    this.retrieveAllFarmTypes();
  }

  retrieveAllFarmTypes(){

    console.log('retrieveAllFarmTypes...');
    this.requestService.get('/farmListing/retrieve/type').subscribe(
      data => {
        this.countType = data as any;
        console.log(this.countType);

        for (var key in this.countType) {
           this.cropsCount = this.countType["Crops"];
           this.flowerCount = this.countType["Flower"];
           this.fruitsCount = this.countType["Fruits"];
           this.vegetableCount = this.countType["Vegetables"];
           this.othersCount = this.countType["Others"];
          console.log(key, this.countType[key]);
        }

        console.log("init doughnut chart..");
        this.doughnutChartLabels = ['Crops', 'Flowers', 'Fruits', 'Vegetables', 'Others'];
        this.doughnutChartData = [
          [this.cropsCount, this.flowerCount, this.fruitsCount, this.vegetableCount, this.othersCount]
        ];
        this.doughnutChartType = 'doughnut';
      }
    );

  }

}
