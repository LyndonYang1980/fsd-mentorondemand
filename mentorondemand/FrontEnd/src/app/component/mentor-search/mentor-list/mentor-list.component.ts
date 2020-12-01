import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';
import { UserModule } from 'src/app/module/user.module';
import { HttpClient } from '@angular/common/http';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { ProposalModule } from 'src/app/module/proposal.module';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  // mentorArray: MentorModule[];
  isUserLoggedIn: string;
  loggedUser: UserModule;
  mentors: MentorModule[];

  @Input() mentorData: MentorModule;
  @Input() mentorList: MentorModule[];
  @Output() onSelectingMentor = new EventEmitter<MentorModule>();
  
  constructor(private proposalService: ProposalService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.initData();
  }

  initData(){
    console.log("Exporting mentor info...");
    // this.mentorArray = JSON.parse(localStorage.getItem('allMentors'));
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    console.log(this.mentorList);
  }
  
  mentorElaborate(mentor: MentorModule) {
    this.onSelectingMentor.emit(mentor);
  }

  proposeMentor(mentorId: number) {
    console.log("deep kumar" + this.loggedUser.userId);
    let proposalData = new ProposalModule(this.loggedUser.userId, mentorId, 12, true,
      false, false, 4.6, 0.0, 'Not Sure');
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
