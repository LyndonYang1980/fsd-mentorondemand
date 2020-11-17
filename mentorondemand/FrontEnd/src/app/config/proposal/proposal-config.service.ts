import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProposalConfigService {

  constructor() { }

  private proposlAPIUrl = "http://localhost/feign/proposal";

  addProposalUrl() {
    return (this.proposlAPIUrl + "/addProposal");
  }

  getUserProposalUrl(userId: number) {
    var theId = '${'+userId+'}';
    return (this.proposlAPIUrl + "/getUserProposal/" + theId);
  }
}
