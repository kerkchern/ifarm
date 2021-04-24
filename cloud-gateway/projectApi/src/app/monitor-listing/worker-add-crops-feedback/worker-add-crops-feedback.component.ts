import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
    selector: 'app-worker-add-crops-feedback',
    templateUrl: './worker-add-crops-feedback.component.html',
    styleUrls: ['./worker-add-crops-feedback.component.css']
  })
export class WorkerAddCropsFeedbackComponent implements OnInit {

    listing = {
      monitorPlanId : null,
      farmId : null,
      remarks : '',
      riskLevel : '',
      mineralLevel : '',
      soilLevel : '',
      image: null
    }

    farmList = {
      farmId : null,
      name : ''
    }

    selectedFiles: FileList
    monitorPlanId: number;

    mode = null;
    MODE_CREATE = 'create';
    MODE_UPDATE = 'update';
    
    constructor(private http:HttpClient,
      private requestService: RequestService,
      private dataService: DataService,
      private router:Router,
      private parserFormatter: NgbDateParserFormatter) { }
      
    ngOnInit(): void {
      
      this.requestService.get('/monitorPlan/getFarmList').subscribe(
        data => {
          this.farmList = data as any;
        }
      )

      if (this.dataService.dataObj && this.dataService.dataObj.isCreate === true){
        this.mode = this.MODE_CREATE;
      }else{
        this.mode = this.MODE_UPDATE;
        this.listing = this.dataService.dataObj.form;
      }
    }

    isModeCreate() : boolean{
      return (this.mode == this.MODE_CREATE);
    }

    onSubmit(form,mode){
      console.log("Im Here");
      console.log("mode: " + mode);
      if(mode === true){
        this.requestService.post('/monitorPlan/addCrops', form).subscribe(
          data => {
            this.listing = data as any;
            this.router.navigate(['workermonitorplan']);
          }
        )
      } else{
        this.monitorPlanId = this.listing.monitorPlanId;
        form.monitorPlanId =  this.monitorPlanId;
        this.requestService.put(`/monitorPlan/updateCrops/${this.monitorPlanId}`, form).subscribe(
          data => {
            this.listing = data as any;
            this.dataService.setDataObj({ form: this.listing})
            this.router.navigate(['workermonitorplan']);
          });
      }
    }

    selectFile(event) {
      this.selectedFiles = event.target.files;
    }
}