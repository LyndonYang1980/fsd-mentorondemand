import { Component, OnInit } from '@angular/core';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';

@Component({
  selector: 'app-mentor-proposal',
  templateUrl: './mentor-proposal.component.html',
  styleUrls: ['./mentor-proposal.component.css']
})
export class MentorProposalComponent implements OnInit {

  constructor(private proposalService: ProposalService) { }

  ngOnInit(): void {
  }

  initData(){
    
  }
}
