import { Component, OnInit, Input } from '@angular/core';
import { ProposalModule } from 'src/app/module/proposal.module';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-proposal-user-confirm-btn',
  templateUrl: './proposal-user-confirm-btn.component.html',
  styleUrls: ['./proposal-user-confirm-btn.component.css']
})
export class ProposalUserConfirmBtnComponent implements OnInit {

  @Input() proposalData: ProposalModule;
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
      location.reload();
    }
  }

  reconfirmProposal() {
    let msg: string;
    this.proposalService.reconfirmProposal(this.proposalData).subscribe(
      (data) => {
        if (data != null) {
          msg = "Proposal got confirmed!";
        } else {
          msg = "Proposal not confirmed due to error!";
        }
        this.showMsgModal(msg);
      }, (err) => {
        msg = "Proposal not modified due to error!";
        this.showMsgModal(msg);
      }
    )
  }
}
