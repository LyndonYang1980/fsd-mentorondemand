import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModule } from 'src/app/module/user.module';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { UserService } from 'src/app/service/userService/user.service';
import { ProposalModule } from 'src/app/module/proposal.module';
import { SkillModule } from 'src/app/module/skill.module';

@Component({
  selector: 'app-proposal-detail',
  templateUrl: './proposal-detail.component.html',
  styleUrls: ['./proposal-detail.component.css']
})
export class ProposalDetailComponent implements OnInit {

  @Input() proposalData: ProposalModule;
  @Output() returnSkillData = new EventEmitter<SkillModule>();
  @Output() returnUserData = new EventEmitter<UserModule>();
  
  skillData: SkillModule;
  userData: UserModule;

  constructor(private userService: UserService, private skillService: SkillService) { }

  ngOnInit() {
    this.getSkillData();
    this.getUserData();
  }

  getSkillData() {
    let skillId: number = this.proposalData.skillId;
    this.skillService.getSkill(skillId).subscribe(
      (data) => {
        this.skillData = data;
        this.returnSkillData.emit(this.skillData);
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
        this.returnUserData.emit(this.userData);
      }, (err) => {
        console.log("No skill found by id:" + userId.toString);
      }
    )
  }
}
