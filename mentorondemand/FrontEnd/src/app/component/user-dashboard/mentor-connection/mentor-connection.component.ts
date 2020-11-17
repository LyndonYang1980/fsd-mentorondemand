import { Component, OnInit } from '@angular/core';
import { ProposalModule } from 'src/app/module/proposal.module';
import { UserModule } from 'src/app/module/user.module';
import { MentorModule } from 'src/app/module/mentor.module';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { MentorService } from 'src/app/service/mentorService/mentor.service';

@Component({
  selector: 'app-mentor-connection',
  templateUrl: './mentor-connection.component.html',
  styleUrls: ['./mentor-connection.component.css']
})

export class MentorConnectionComponent implements OnInit {
  mentorByUserData: ProposalModule[];
  mentorArray: MentorModule[];
  userLoggedIn: UserModule;
  constructor(private userMentorConnection: ProposalService,
              private mentorService: MentorService) { }

  ngOnInit() {
    this.getMentorByUser();
  }
  // Getting mentors for users
  getMentorByUser() {
    this.userLoggedIn = JSON.parse(localStorage.getItem('UserLoggedIn'));
    this.userMentorConnection.getUserProposal(this.userLoggedIn.userId)
      .subscribe((data) => {
        console.log("getting user by Mentor connections");
        this.mentorByUserData = data;
        this.getMentorByConnectionList();
      }, () => {
        console.log("Cannot get connections for user");
      })
  }

  getMentorByConnectionList() {
    let mentorIdArray: Array<number> = [];
    console.log(this.mentorByUserData);
    for (var i = 0; i < this.mentorByUserData.length; i++) {
      mentorIdArray.push(this.mentorByUserData[i].mentorId);
    }
    console.log(mentorIdArray);
    this.mentorService.getMentorByUserProposal(mentorIdArray)
      .subscribe((data) => {
        this.mentorArray = data;
        console.log(this.mentorArray);
        console.log("got mentor list by user connections");
      }, (error) => {
        console.log("cannot get user connection for mentors and mentor list");
      });
  }

}
