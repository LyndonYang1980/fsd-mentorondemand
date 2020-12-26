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
    return (this.proposlAPIUrl + "/getUserProposal/" + userId);
  }

  getMentorProposalUrl(mentorId: number) {
    var theId = mentorId;
    return (this.proposlAPIUrl + "/getMentorProposal/" + theId);
  }

  acceptProposalUrl(proposalId: number) {
    return (this.proposlAPIUrl + "/acceptProposal/" + proposalId);
  }

  rejectProposalUrl(proposalId: number) {
    return (this.proposlAPIUrl + "/rejectProposal/" + proposalId);
  }

  reconfirmProposalUrl(proposalId: number) {
    return (this.proposlAPIUrl + "/reconfirmProposal/" + proposalId);
  }
}
