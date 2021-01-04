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

  getMentorAddedUrl(){
    return (this.mentorAPIUrl + "/addMentor");
  }

  updMentorUrl(){
    return (this.mentorAPIUrl + "/updateMentor");
  }

  getMentorLoginUrl(){
    return (this.mentorAPIUrl + "/login");
  }

  getMentorProposalByUserUrl(){
    return (this.mentorAPIUrl + "/getMentorProposalByUser");
  }

  searchMentorByKeyUrl(searchKey: string){
    return (this.mentorAPIUrl + "/searchMentorByKey/" + searchKey);
  }
}
