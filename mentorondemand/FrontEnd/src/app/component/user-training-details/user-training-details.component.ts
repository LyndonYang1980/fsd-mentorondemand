import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/service/trainingService/training.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TrainingModule } from 'src/app/module/training.module';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { MessageOkcancelModalComponent } from '../message-okcancel-modal/message-okcancel-modal.component';
import { RatingModalComponent } from '../rating-modal/rating-modal.component';
import { SkillModule } from 'src/app/module/skill.module';
import { SkillService } from 'src/app/service/skillService/skill.service';

@Component({
  selector: 'app-user-training-details',
  templateUrl: './user-training-details.component.html',
  styleUrls: ['./user-training-details.component.css']
})
export class UserTrainingDetailsComponent implements OnInit {

  trainingForm: FormGroup;
  trainingId: number;
  trainingData: TrainingModule;
  skillData: SkillModule;
  bsModalRef: BsModalRef;
  bsConfig: Partial<BsDatepickerConfig>;
  title: string;
  msg: string;

  constructor(private formBuilder: FormBuilder, private trainingService: TrainingService,
    private skillService: SkillService, private activeRouter: ActivatedRoute, 
    private bsModalService: BsModalService) { }

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
        skillName: [{ value: this.skillData.skillName, disabled: true }],
        trainingId: [{ value: this.trainingData.trainingId, disabled: true }],
        fee: [{ value: this.trainingData.fee, disabled: true }, Validators.required],
        status: [{ value: this.trainingData.status, disabled: true }],
        rating: [{ value: this.trainingData.rating, disabled: true }],
        progress: [{ value: this.trainingData.progress, disabled: true }],
        startDate: [{ value: sDate, disabled: true }, Validators.required],
        endDate: [{ value: eDate, disabled: true }, Validators.required],
        startTime: [{ value: sTime, disabled: true }, Validators.required],
        endTime: [{ value: eTime, disabled: true }, Validators.required],
      }
    );
  }

  onConfirm() {

    const initialState = {
      title: 'Information',
      msg: "Are you sure to confirm this training?"
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageOkcancelModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      this.trainingData.status = "re-confirmed";
      this.trainingService.updateTraining(this.trainingData).subscribe(
        (training) => {
          if (training != null) {
            this.msg = "You have confirmed the training!";
          } else {
            this.msg = "Training not confirmed due to error!"
          }
          this.showMsgModal(this.msg);
        }
      )
    }
  }

  onRating() {
    this.showRatingModal();
  }

  showRatingModal() {
    const initialState = {};

    this.bsModalRef = this.bsModalService.show(RatingModalComponent, { initialState });

    this.bsModalRef.content.onSubmit = (ratingArr) => {
      let ratingVal: number = ratingArr[0];
      this.trainingData.rating = ratingVal;
      console.log("Rating is:" + ratingVal.toString());
      this.trainingService.updateTraining(this.trainingData).subscribe(
        (training) => {
          if (training != null) {
            this.msg = "Rating successfully!";
          } else {
            this.msg = "Rating failed due to error"
          }
          this.showMsgModal(this.msg);
        }
      )
    }
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
        (skill)=>{
          this.skillData = skill;
          this.buildForm();
        }
      )
    }
    )
  }

}
