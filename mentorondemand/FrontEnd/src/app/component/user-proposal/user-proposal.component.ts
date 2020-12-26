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
    this.proposalService.getUserProposal(userId).subscribe((data) => {
      this.userProposalList = data.sort((n1, n2) => n1.proposalId - n2.proposalId);
    }, (error) => {
      console.log(error);
    })
  }

  handleRetProposalData(retProposalData: ProposalModule){
    let index:number = this.userLoggedIn.proposals.findIndex(proposalItem=>{
      return proposalItem.proposalId === retProposalData.proposalId;
    });

    if (index > -1) {
      this.userLoggedIn.proposals.splice(index,1,retProposalData);   
      localStorage.setItem('mentorLoggedIn', JSON.stringify(this.userLoggedIn));   
    }
  }
}
