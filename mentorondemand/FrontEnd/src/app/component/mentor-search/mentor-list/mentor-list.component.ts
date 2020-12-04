import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';
import { UserModule } from 'src/app/module/user.module';
import { HttpClient } from '@angular/common/http';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { ProposalModule } from 'src/app/module/proposal.module';
import { SkillModule } from 'src/app/module/skill.module';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  isUserLoggedIn: string;
  userLoggedIn: UserModule;

  theMentor: MentorModule;
  @Input() mentorList: MentorModule[];
  @Output() onSelectingMentor = new EventEmitter<MentorModule>();

  constructor(private proposalService: ProposalService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    console.log("Exporting mentor info...");
    this.userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
  }

  mentorElaborate(mentor: MentorModule) {
    this.onSelectingMentor.emit(mentor);
  }

  sendProposal(selectedSkills: SkillModule[]) {
    for (let i = 0; i < selectedSkills.length; i++) {
      let skillItem: SkillModule = selectedSkills[i];
      let proposalData = new ProposalModule(this.userLoggedIn.userId, this.theMentor.mentorId, skillItem.skillId,
        true, false, false, 0, 0, null);
      this.proposalService.addProposal(proposalData)
        .subscribe((data) => {
          console.log("Successfully connected");
          console.log(data)
            ;
        }, (err) => {
          console.log("Connection Not sent");
        });
    }

  }
}
