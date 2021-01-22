import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MentorConfigService {

  constructor() { }

  private mentorAPIUrl = "http://localhost/feign/mentors";

  getMentorsUrl(){
    return (this.mentorAPIUrl + "/getMentors");
  }

  getMentorUrl(mentorId: number){
    return (this.mentorAPIUrl + "/" + mentorId);
  }

  getMentorSignUpUrl(){
    return (this.mentorAPIUrl + "/signup");
  }

  updMentorUrl(){
    return (this.mentorAPIUrl + "/updateMentor");
  }

  getMentorSignInUrl(){
    return (this.mentorAPIUrl + "/signin");
  }

  getMentorProposalByUserUrl(){
    return (this.mentorAPIUrl + "/getMentorProposalByUser");
  }

  searchMentorByKeyUrl(searchKey: string){
    return (this.mentorAPIUrl + "/searchMentorByKey/" + searchKey);
  }
}
