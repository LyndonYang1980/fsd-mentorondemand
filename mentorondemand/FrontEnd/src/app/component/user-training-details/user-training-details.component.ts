import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/service/trainingService/training.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TrainingModule } from 'src/app/module/training.module';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { MessageOkcancelModalComponent } from '../message-okcancel-modal/message-okcancel-modal.component';

@Component({
  selector: 'app-user-training-details',
  templateUrl: './user-training-details.component.html',
  styleUrls: ['./user-training-details.component.css']
})
export class UserTrainingDetailsComponent implements OnInit {

  trainingForm: FormGroup;
  trainingId: number;
  trainingData: TrainingModule;
  bsModalRef: BsModalRef;
  bsConfig: Partial<BsDatepickerConfig>;
  title: string;
  msg: string;

  constructor(private formBuilder: FormBuilder, private trainingService: TrainingService,
    private activeRouter: ActivatedRoute, private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.bsConfig = Object.assign({}, { isAnimated: true, dateInputFormat: 'YYYY-MM-DD' });
    this.getParams();
  }

  buildForm() {

    let sDate: Date = (this.trainingData.startDate == null) ? null : new Date(this.trainingData.startDate);
    let eDate: Date = (this.trainingData.endDate == null) ? null : new Date(this.trainingData.endDate);

    this.trainingForm = this.formBuilder.group(
      {
        trainingId: [{ value: this.trainingData.trainingId, disabled: true }],
        startDate: [{ value: sDate, disabled: true }, Validators.required],
        endDate: [{ value: eDate, disabled: true }, Validators.required],
        fee: [{ value: this.trainingData.fee, disabled: true }, Validators.required],
        status: [{ value: this.trainingData.status, disabled: true }],
        progress: [{ value: this.trainingData.progress, disabled: true }],
      }
    );
  }

  onConfirm() {
    this.msg = "Are you sure to confirm this training?";
    this.showMsgOkCancelModal(this.msg);
  }

  showMsgOkCancelModal(msg: string) {

    const initialState = {
      title: 'Information',
      msg: msg
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageOkcancelModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      this.trainingData.status = "re-confirmed";
      this.trainingService.updateTraining(this.trainingData).subscribe(
        (training) => {
          if (training != null) {
            this.msg = "Training confirmed!";
          } else {
            this.msg = "Training not confirmed due to error!"
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
      this.buildForm();
      console.log("found training");
    }
    )
  }

}
