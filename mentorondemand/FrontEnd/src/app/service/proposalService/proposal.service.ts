import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProposalConfigService } from 'src/app/config/proposal/proposal-config.service';
import { ProposalModule } from 'src/app/module/proposal.module';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(private httpClient: HttpClient,
    private proposalConfig: ProposalConfigService) { }

  addProposal(proposalDataList: ProposalModule[]): Observable<ProposalModule[]> {
    return this.httpClient.post<ProposalModule[]>(this.proposalConfig.addProposalUrl(), proposalDataList, httpOptions);
  }

  getUserProposal(userId: number): Observable<ProposalModule[]> {
    return this.httpClient.get<ProposalModule[]>(this.proposalConfig.getUserProposalUrl(userId));
  }

  getMentorProposal(mentorId: number): Observable<ProposalModule[]> {
    return this.httpClient.get<ProposalModule[]>(this.proposalConfig.getMentorProposalUrl(mentorId));
  }

  acceptProposal(proposalData: ProposalModule): Observable<ProposalModule> {
    let proposalId: number = proposalData.proposalId;
    return this.httpClient.put<ProposalModule>(this.proposalConfig.acceptProposalUrl(proposalId), proposalData, httpOptions);
  }

  rejectProposal(proposalData: ProposalModule): Observable<ProposalModule> {
    let proposalId: number = proposalData.proposalId;
    return this.httpClient.put<ProposalModule>(this.proposalConfig.rejectProposalUrl(proposalId), proposalData, httpOptions);
  }

  reconfirmProposal(proposalData: ProposalModule): Observable<ProposalModule> {
    let proposalId: number = proposalData.proposalId;
    return this.httpClient.put<ProposalModule>(this.proposalConfig.reconfirmProposalUrl(proposalId), proposalData, httpOptions);
  }
}
