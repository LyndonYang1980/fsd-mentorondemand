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
    this.getMentorDetail();
    this.getMentorProposalData();
  }

  getSkillData() {
    let skillId: number = this.proposalData.skillId;
    this.skillService.getSkill(skillId).subscribe(
      (data) => {
        this.skillData = data;
      }, (err) => {
        console.log("No skill found by id:" + skillId.toString);
      }
    )
  }

  getUserData() {
    let userId: number = this.proposalData.userId;
    this.userService.getUser(userId).subscribe(
      (data) => {
        this.userData = data;
      }, (err) => {
        console.log("No skill found by id:" + userId.toString);
      }
    )
  }

  handleRetSkillData(retSkillData: SkillModule) {
    this.skillData = retSkillData;
  }

  handleRetUserData(retUserData: UserModule) {
    this.userData = retUserData;
  }

  getMentorDetail() {
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
