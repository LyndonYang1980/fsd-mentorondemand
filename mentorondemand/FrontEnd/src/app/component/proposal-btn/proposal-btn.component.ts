import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProposalModalComponent } from '../proposal-modal/proposal-modal.component';
import { SkillModule } from 'src/app/module/skill.module';
import { ProposalModule } from 'src/app/module/proposal.module';
import { UserModule } from 'src/app/module/user.module';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-proposal-btn',
  templateUrl: './proposal-btn.component.html',
  styleUrls: ['./proposal-btn.component.css']
})
export class ProposalBtnComponent implements OnInit {

  @Input() mentorData: MentorModule;
  @Input() isUserLoggedIn: string;
  @Input() userLoggedIn: UserModule;

  selectedSkills: SkillModule[];
  mentorSkills: SkillModule[];
  bsModalRef: BsModalRef;

  constructor(private proposalService: ProposalService, private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.mentorSkills = this.mentorData.skills;
  }


  showProposalModal() {
    // Initial params to pass to BsModalReference object
    const initialState = {
      title: 'Select skill for proposal',
      mentorSkills: this.mentorSkills
    };

    // Show skill selection dialog modal
    this.bsModalRef = this.bsModalService.show(ProposalModalComponent, { initialState });

    // The subscription function triggered when the subcomponent is closed.
    this.bsModalRef.content.onSubmit = (skillIds: string[]) => {
      console.log("Selected skill id: " + skillIds);
      this.selectedSkills = this.mentorSkills.filter(skill => skillIds.includes(skill.skillId.toString()));
      console.log("Filtered skill" + JSON.stringify(this.selectedSkills));
      this.sendProposal();
    }
  }

  showMsgModal(msg: string) {

    const initialState = {
      title: 'Information',
      msg: msg
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageModalComponent, { initialState });

  }

  sendProposal() {

    let msg: string = "";
    let proposalDataList: ProposalModule[] = [];

    for (let i = 0; i < this.selectedSkills.length; i++) {

      let skillItem: SkillModule = this.selectedSkills[i];
      let proposalData = new ProposalModule(null, this.userLoggedIn, this.mentorData, skillItem,
        true, null, null);
      proposalDataList.push(proposalData);
    }

    this.proposalService.addProposal(proposalDataList)
      .subscribe((data) => {
        msg = "Proposal sent successfully!";
        console.log(msg);
        this.showMsgModal(msg);
      },
        (err) => {
          msg = "Proposal sent failed - " + err;
          console.log(msg);
          this.showMsgModal(msg);
        });
  }

}
