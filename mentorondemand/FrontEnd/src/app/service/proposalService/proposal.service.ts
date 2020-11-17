import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProposalConfigService } from 'src/app/config/proposal/proposal-config.service';
import { ProposalModule } from 'src/app/module/proposal.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(private httpClient: HttpClient,
    private proposalConfig: ProposalConfigService) { }

  addProposal(proposalData: ProposalModule): Observable<ProposalModule> {
    return this.httpClient.post<ProposalModule>(this.proposalConfig.addProposalUrl(), proposalData);
  }

  getUserProposal(userId: number): Observable<ProposalModule[]> {
    return this.httpClient.get<ProposalModule[]>(this.proposalConfig.getUserProposalUrl(userId));
  }
}
