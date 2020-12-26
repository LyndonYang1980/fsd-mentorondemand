import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { ProposalModule } from 'src/app/module/proposal.module';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { TrainingDetailModalComponent } from '../training-detail-modal/training-detail-modal.component';

@Component({
  selector: 'app-proposal-mentor-btn',
  templateUrl: './proposal-mentor-btn.component.html',
  styleUrls: ['./proposal-mentor-btn.component.css']
})
export class ProposalMentorBtnComponent implements OnInit {

  @Input() proposalData: ProposalModule;
  @Output() retProposalData = new EventEmitter<ProposalModule>();
  bsModalRef: BsModalRef;

  constructor(private proposalService: ProposalService, private bsModalService: BsModalService) { }

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
      this.retProposalData.emit(this.proposalData);      
    }
  }

  showTrainingDetailModal(){
    const initialState = {
      title: 'Information'
    };

    this.bsModalRef = this.bsModalService.show(TrainingDetailModalComponent, {initialState});
    this.bsModalRef.content.onSubmit = ()=>{
      
    }
  }

  acceptProposal() {

    let msg: string;
    this.proposalService.acceptProposal(this.proposalData).subscribe(
      (data) => {
        if (data != null) {
          msg = "Proposal accepted!";
          this.proposalData = data;
        } else {
          msg = "Proposal not accepted due to error!";
        }
        this.showMsgModal(msg);
      }, (err) => {
        msg = "Proposal not modified due to error!";
        this.showMsgModal(msg);
      }
    )
  }

  rejectProposal() {
    let msg: string;
    this.proposalService.rejectProposal(this.proposalData).subscribe(
      (data) => {
        if (data != null) {
          msg = "Proposal rejected!";
          this.proposalData = data;
        } else {
          msg = "Proposal not rejected due to error!";
        }
        this.showMsgModal(msg);
      }, (err) => {
        msg = "Proposal not modified due to error!";
        this.showMsgModal(msg);
      }
    )
  }
}
