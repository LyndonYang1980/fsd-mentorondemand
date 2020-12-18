import { Component, OnInit, Input } from '@angular/core';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { ProposalModule } from 'src/app/module/proposal.module';
import { MentorModule } from 'src/app/module/mentor.module';
import { UserModule } from 'src/app/module/user.module';
import { SkillModule } from 'src/app/module/skill.module';
import { UserService } from 'src/app/service/userService/user.service';
import { SkillService } from 'src/app/service/skillService/skill.service';

@Component({
  selector: 'app-mentor-proposal',
  templateUrl: './mentor-proposal.component.html',
  styleUrls: ['./mentor-proposal.component.css']
})
export class MentorProposalComponent implements OnInit {

  mentorData: MentorModule;
  proposalData: ProposalModule;
  mentorProposalList: ProposalModule[];
  skillData: SkillModule;
  userData: UserModule;

  constructor(private proposalService: ProposalService,
    private userService: UserService,
    private skillService: SkillService) { }

  ngOnInit(): void {
    this.getLoginMentor();
    this.getMentorProposalData();
  }

  getLoginMentor() {
    this.mentorData = JSON.parse(localStorage.getItem("mentorLoggedIn"));
    console.log("Mentor logged in: " + this.mentorData.mentorName);
  }

  getMentorProposalData() {
    let mentorId = this.mentorData.mentorId;
    this.proposalService.getMentorProposal(mentorId).subscribe((data) => {
      this.mentorProposalList = data;
    }, (error) => {
      console.log(error);
    })
  }
}
