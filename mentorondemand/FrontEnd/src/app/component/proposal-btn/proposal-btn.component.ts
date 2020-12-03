import { Component, OnInit, Input } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProposalModalComponent } from '../proposal-modal/proposal-modal.component';
import { SkillModule } from 'src/app/module/skill.module';

@Component({
  selector: 'app-proposal-btn',
  templateUrl: './proposal-btn.component.html',
  styleUrls: ['./proposal-btn.component.css']
})
export class ProposalBtnComponent implements OnInit {

  @Input() mentorData: MentorModule;
  @Input() isUserLoggedIn: string;

  mentorSkills: SkillModule[];
  skills: string;
  skillArr = [];
  bsModalRef: BsModalRef;

  constructor(private bsModalService: BsModalService) { }

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
    const initialState = {
      title: 'Select skill for proposal',
      mentorSkills: this.mentorSkills
    };
    
    // Show modal
    this.bsModalRef = this.bsModalService.show(ProposalModalComponent, {initialState});
    // The subscription function triggered when the subcomponent is closed.
    this.bsModalRef.content.onConfirm = (result: string)=>{
      console.log("Return value: " + result);
    }

  }

}
