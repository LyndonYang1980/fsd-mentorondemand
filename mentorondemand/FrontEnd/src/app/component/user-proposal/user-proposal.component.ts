import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/module/user.module';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { UserService } from 'src/app/service/userService/user.service';
import { ProposalModule } from 'src/app/module/proposal.module';

@Component({
  selector: 'app-user-proposal',
  templateUrl: './user-proposal.component.html',
  styleUrls: ['./user-proposal.component.css']
})
export class UserProposalComponent implements OnInit {

  userLoggedIn: UserModule;
  userProposalList: ProposalModule[];

  constructor(private proposalService: ProposalService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getLoginUser();
    this.getUserProposalData();
  }

  getLoginUser() {
    this.userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
  }

  getUserProposalData() {
    let userId = this.userLoggedIn.userId;
    this.proposalService.getMentorProposal(userId).subscribe((data) => {
      this.userProposalList = data;
    }, (error) => {
      console.log(error);
    })
  }

}
