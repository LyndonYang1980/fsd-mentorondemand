import { Component, OnInit, Input } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';

@Component({
  selector: 'app-proposal-btn',
  templateUrl: './proposal-btn.component.html',
  styleUrls: ['./proposal-btn.component.css']
})
export class ProposalBtnComponent implements OnInit {

  @Input() mentorData: MentorModule;
  @Input() isUserLoggedIn: string;

  constructor() { }

  ngOnInit(): void {
  }

  proposeMentor(mentorId: number) {
    // let proposalData = new ProposalModule(this.loggedUser.userId, mentorId, );
    // this.proposalService.addProposal(proposalData)
    //   .subscribe((data) => {
    //     console.log("Successfully connected");
    //     console.log(data)
    //       ;
    //   }, (err) => {
    //     console.log("Connection Not sent");
    //   });
  }

}
