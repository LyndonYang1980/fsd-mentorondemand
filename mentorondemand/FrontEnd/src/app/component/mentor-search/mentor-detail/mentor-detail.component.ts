import { Component, OnInit, Input } from '@angular/core';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { UserModule } from 'src/app/module/user.module';
import { ProposalModule } from 'src/app/module/proposal.module';
import { HttpClient } from '@angular/common/http';
import { MentorModule } from 'src/app/module/mentor.module';

@Component({
  selector: 'app-mentor-detail',
  templateUrl: './mentor-detail.component.html',
  styleUrls: ['./mentor-detail.component.css']
})
export class MentorDetailComponent implements OnInit {

  @Input() mentorData: MentorModule;
  constructor(private proposalService: ProposalService,
    private httpClient: HttpClient) { }

  isUserLoggedIn: string;
  loggedUser: UserModule;

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    console.log("Check" + this.isUserLoggedIn);
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
