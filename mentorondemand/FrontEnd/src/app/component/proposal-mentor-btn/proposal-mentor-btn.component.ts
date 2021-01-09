import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { ProposalModule } from 'src/app/module/proposal.module';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { TrainingDetailModalComponent } from '../training-detail-modal/training-detail-modal.component';
import { TrainingModule } from 'src/app/module/training.module';
import { TrainingService } from 'src/app/service/trainingService/training.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal-mentor-btn',
  templateUrl: './proposal-mentor-btn.component.html',
  styleUrls: ['./proposal-mentor-btn.component.css']
})
export class ProposalMentorBtnComponent implements OnInit {

  @Input() trainingData: TrainingModule;
  @Input() proposalData: ProposalModule;
  @Output() retProposalData = new EventEmitter<ProposalModule>();
  bsModalRef: BsModalRef;
  msg: string;

  constructor(
    private trainingService: TrainingService, private bsModalService: BsModalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  showMsgModal(msg: string) {

    const initialState = {
      title: 'Information',
      msg: msg
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      // this.retProposalData.emit(this.proposalData);
      location.reload();
    }
  }

  viewTrainingDetail() {
    this.router.navigate(['mentortrainingdetails'], {
      queryParams: {
        trainingId: this.trainingData.trainingId
      }
    });
  }

  acceptProposal() {

    this.trainingData.status = "confirmed";
    this.trainingService.updateTraining(this.trainingData).subscribe(
      (data) => {
        if (data != null) {
          this.msg = "Training proposal confirmed";
          this.trainingData = data;
        } else {
          this.msg = "Training proposal not confirmed due to error!";
        }
        this.showMsgModal(this.msg);
      }, (err) => {
        this.msg = "Training proposal not modified due to error!";
        this.showMsgModal(this.msg);
      }
    )
  }

  rejectProposal() {

    this.trainingData.status = "rejected";
    this.trainingService.updateTraining(this.trainingData).subscribe(
      (data) => {
        if (data != null) {
          this.msg = "Training proposal rejected";
          this.trainingData = data;
        } else {
          this.msg = "Training proposal not rejected due to error!";
        }
        this.showMsgModal(this.msg);
      }, (err) => {
        this.msg = "Training proposal not rejected due to error!";
        this.showMsgModal(this.msg);
      }
    )
  }
}
