import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProposalModalComponent } from '../proposal-modal/proposal-modal.component';
import { SkillModule } from 'src/app/module/skill.module';
import { ProposalModule } from 'src/app/module/proposal.module';
import { UserModule } from 'src/app/module/user.module';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';

@Component({
  selector: 'app-proposal-btn',
  templateUrl: './proposal-btn.component.html',
  styleUrls: ['./proposal-btn.component.css']
})
export class ProposalBtnComponent implements OnInit {

  @Input() mentorData: MentorModule;
  @Input() isUserLoggedIn: string;
  @Input() userLoggedIn: UserModule;
  // @Output() selectedSkills = new EventEmitter<SkillModule[]>();
  @Output() selectedMentor = new EventEmitter<MentorModule>();

  selectedSkills: SkillModule[];
  mentorSkills: SkillModule[];
  skills: string;
  skillArr = [];
  bsModalRef: BsModalRef;

  constructor(private proposalService: ProposalService, private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.mentorSkills = this.mentorData.skills;
    this.mentorSkills.forEach((m) => {
      this.skillArr.push(m.skillName);
    });

    this.skills = this.skillArr.toLocaleString();
    console.log("Skill string: " + this.skills);
  }


  showProposalModal() {

    // Initial params to pass to BsModalReference object
    const initialState = {
      title: 'Select skill for proposal',
      mentorSkills: this.mentorSkills
    };
    
    // Show modal
    this.bsModalRef = this.bsModalService.show(ProposalModalComponent, {initialState});
    // The subscription function triggered when the subcomponent is closed.
    this.bsModalRef.content.onConfirm = (skillIds: string[])=>{
      console.log("Selected skill id: " + skillIds);
      this.selectedSkills = this.mentorSkills.filter(skill => skillIds.includes(skill.skillId.toString()));
      // let tmpSkills = this.mentorSkills.filter(skill => skillIds.includes(skill.skillId.toString()));
      // this.selectedSkills.emit(tmpSkills);
      // this.selectedMentor.emit(this.mentorData);
      console.log("Filtered skill" + JSON.stringify(this.selectedSkills));
      this.sendProposal();
    }
  }

  sendProposal() {
    for (let i = 0; i < this.selectedSkills.length; i++) {
      let skillItem: SkillModule = this.selectedSkills[i];
      let proposalData = new ProposalModule(this.userLoggedIn.userId, this.mentorData.mentorId, skillItem.skillId,
        true, false, false, 0, 0, null);
      this.proposalService.addProposal(proposalData)
        .subscribe((data) => {
          console.log("Successfully connected");
          console.log(data);        
        }, (err) => {
          console.log("Connection Not sent");
        });
    }

  }

}
