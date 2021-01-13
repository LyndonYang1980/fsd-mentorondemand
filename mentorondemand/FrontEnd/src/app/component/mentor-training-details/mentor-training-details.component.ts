import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from 'src/app/service/trainingService/training.service';
import { TrainingModule } from 'src/app/module/training.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MessageOkcancelModalComponent } from '../message-okcancel-modal/message-okcancel-modal.component';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { SkillModule } from 'src/app/module/skill.module';


@Component({
  selector: 'app-mentor-training-details',
  templateUrl: './mentor-training-details.component.html',
  styleUrls: ['./mentor-training-details.component.css']
})
export class MentorTrainingDetailsComponent implements OnInit {

  trainingForm: FormGroup;
  trainingId: number;
  trainingData: TrainingModule;
  skillData: SkillModule;
  bsModalRef: BsModalRef
  bsConfig: Partial<BsDatepickerConfig>;
  // startDate: Date;
  // endDate: Date;
  editMode: boolean = false;
  title: string;
  msg: string;

  formErrors = {
    fee: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: ''
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
    },

    'startTime': {
      'required': 'Please input start time',
    },

    'endTime': {
      'required': 'Please input end time',
    }
  };

  constructor(private formBuilder: FormBuilder, private trainingService: TrainingService,
    private activeRouter: ActivatedRoute, private skillService: SkillService,
    private bsModalService: BsModalService
  ) { };

  ngOnInit(): void {
    this.bsConfig = Object.assign({}, { isAnimated: true, dateInputFormat: 'YYYY-MM-DD' });
    this.getParams();
  }

  buildForm() {

    let sDate: Date = (this.trainingData.startDate == null) ? null : new Date(this.trainingData.startDate);
    let eDate: Date = (this.trainingData.endDate == null) ? null : new Date(this.trainingData.endDate);
    let sTime: Date = (this.trainingData.startTime == null) ? null : new Date(this.trainingData.startTime);
    let eTime: Date = (this.trainingData.endTime == null) ? null : new Date(this.trainingData.endTime);

    this.trainingForm = this.formBuilder.group(
      {
        trainingId: [{ value: this.trainingData.trainingId, disabled: true }],
        skillName: [{ value: this.skillData.skillName, disabled: true }],
        startDate: [{ value: sDate, disabled: true }, Validators.required],
        endDate: [{ value: eDate, disabled: true }, Validators.required],
        startTime: [{ value: sTime, disabled: true }, Validators.required],
        endTime: [{ value: eTime, disabled: true }, Validators.required],
        fee: [{ value: this.trainingData.fee, disabled: true }, Validators.required],
        status: [{ value: this.trainingData.status, disabled: true }],
        // rating: [{ value: this.trainingData.rating, disabled: true }],
        progress: [{ value: this.trainingData.progress, disabled: true }],
        amountReceived: [{ value: this.trainingData.amountReceived, disabled: true }]
      }
    );

    this.trainingForm.valueChanges.subscribe(
      data => this.onValueChange(data)
    );
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

  onEdit() {
    this.trainingForm.get('startDate').enable({ emitEvent: false });
    this.trainingForm.get('endDate').enable({ emitEvent: false });
    this.trainingForm.get('startTime').enable({ emitEvent: false });
    this.trainingForm.get('endTime').enable({ emitEvent: false });
    this.trainingForm.get('fee').enable({ emitEvent: false });
    this.editMode = true;
  }

  setStart() {

    const initialState = {
      title: 'Information',
      msg: "Are you sure to start this training?"
    }

    this.bsModalRef = this.bsModalService.show(MessageOkcancelModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      this.trainingData.status = "In progress";
      this.trainingService.updateTraining(this.trainingData).subscribe(
        (training) => {
          if (training != null) {
            this.msg = "Training successfully set in progress";
          } else {
            this.msg = "Training failed being set started"
          }
          this.showMsgModal(this.msg);
        }
      )
    }
  }

  genTrainingObj(): TrainingModule {
    let tId: number = this.trainingData.trainingId;
    let uId: number = this.trainingData.userId;
    let mId: number = this.trainingData.mentorId;
    let sId: number = this.trainingData.skillId;
    let fee: number = this.trainingForm.get('fee').value;
    let status: string = this.trainingForm.get('status').value;
    let progress: number = this.trainingForm.get('progress').value;
    let rating: number = this.trainingData.rating;
    let sDate: Date = this.trainingForm.get('startDate').value;
    let eDate: Date = this.trainingForm.get('endDate').value;
    let sTime: Date = this.trainingForm.get('startTime').value;
    let eTime: Date = this.trainingForm.get('endTime').value;
    let amountReceived = this.trainingForm.get('amountReceived').value;

    let retTraining: TrainingModule = new TrainingModule(tId, uId, mId, sId, fee, status, progress,
      rating, sDate, eDate, sTime, eTime, amountReceived);
    return retTraining;
  }

  onSubmit() {
    let updTraining: TrainingModule = this.genTrainingObj();
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
      this.skillService.getSkill(this.trainingData.skillId).subscribe(
        (skill) => {
          this.skillData = skill;
          this.buildForm();
        }
      )
    }
    )
  }
}
