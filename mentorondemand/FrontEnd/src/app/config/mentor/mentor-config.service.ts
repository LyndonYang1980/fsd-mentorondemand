import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MentorConfigService {

  constructor() { }

  private mentorAPIUrl = "http://localhost/feign/mentors";

  getMentorsUrl(){
    return (this.mentorAPIUrl);
  }

  getMentorUrl(mentorId: number){
    return (this.mentorAPIUrl + "/{mentorId}");
  }

  getMentorAddedUrl(){
    return (this.mentorAPIUrl);
  }

  getMentorUpdUrl(){
    return (this.mentorAPIUrl);
  }

  getMentorLoginUrl(){
    return (this.mentorAPIUrl + "/login");
  }
}
