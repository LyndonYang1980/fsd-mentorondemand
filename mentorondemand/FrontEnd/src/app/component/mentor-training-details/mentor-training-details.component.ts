import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingService } from 'src/app/service/trainingService/training.service';
import { TrainingModule } from 'src/app/module/training.module';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-mentor-training-details',
  templateUrl: './mentor-training-details.component.html',
  styleUrls: ['./mentor-training-details.component.css']
})
export class MentorTrainingDetailsComponent implements OnInit {

  trainingForm: FormGroup;
  trainingId: number;
  trainingData: TrainingModule;
  bsModalRef: BsModalRef
  bsConfig: Partial<BsDatepickerConfig>;
  startDate: Date;
  endDate: Date;
  title: string;
  msg: string;

  formErrors = {
    fee: '',
    startDate: '',
    endDate: ''
  };

  validationMessage = {
    'fee': {
      'required': 'Please input fee',
    },

    'startDate': {
      'required': 'Please input start date',
    },

    'endDate': {
      'required': 'Please input end date',
    }
  };

  constructor(private formBuilder: FormBuilder, private trainingService: TrainingService,
    private activeRouter: ActivatedRoute,
    private bsModalService: BsModalService
  ) { };

  ngOnInit(): void {

    this.getParams();
  }

  buildForm() {
    this.trainingForm = this.formBuilder.group(
      {
        trainingId: [this.trainingData.trainingId],
        startDate: [this.trainingData.startDate, Validators.required],
        endDate: [this.trainingData.endDate, Validators.required],
        fee: [this.trainingData.fee, Validators.required],
        status: [this.trainingData.status],
        progress: [this.trainingData.progress],
        amountReceived: [this.trainingData.amountReceived]
      }
    );

    this.trainingForm.valueChanges.subscribe(
      data => this.onValueChange(data)
    );

    document.getElementById('startDate').focus();
  }

  onValueChange(data?: any) {

    if (!this.trainingForm) { return; }
    const fGroup = this.trainingForm;

    for (const field in this.formErrors) {
      // Clear current error msg
      this.formErrors[field] = '';
      // Get current form control
      const control = fGroup.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + '\n';
        }
      }
    }
  }

  onSubmit() {

    let tId:number = this.trainingData.trainingId;
    let uId:number = this.trainingData.userId;
    let mId:number = this.trainingData.mentorId;
    let sId:number = this.trainingData.skillId;
    let fee:number = this.trainingForm.get('fee').value;
    let status:string = this.trainingForm.get('status').value;
    let progress:number = this.trainingForm.get('progress').value;
    let rating:number = this.trainingData.rating;
    let sDate:Date = this.handleNgbDate(this.trainingForm.get('startDate').value);
    let eDate:Date = this.handleNgbDate(this.trainingForm.controls['endDate'].value);
    let amountReceived = this.trainingForm.get('amountReceived').value;

    let updTraining:TrainingModule = new TrainingModule(tId, uId, mId, sId, fee, status, progress, rating, sDate, eDate, amountReceived);
    this.trainingService.updateTraining(updTraining).subscribe(
      (training) => {
        if (training != null) {
          this.msg = "Training updated successfully";
        } else {
          this.msg = "Training not updated"
        }
        this.showMsgModal(this.msg);
      }
    )
  }

  handleNgbDate(ngbDate:any): Date{
    let myDate = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day);
    return myDate;
  }

  showMsgModal(msg: string) {

    const initialState = {
      title: 'Information',
      msg: msg
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      location.reload();
    }
  }

  getParams() {
    this.activeRouter.queryParams.subscribe(
      (params) => {
        this.trainingId = params.trainingId;
        this.getTraining(this.trainingId);
      })
  }

  getTraining(trainingId: number) {
    this.trainingService.getTraining(trainingId).subscribe((training) => {
      this.trainingData = training;
      this.buildForm();
      console.log("found training");
    }
    )
  }
}
