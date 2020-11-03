import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillConfigService {

  private skillAPIUrl = "http://localhost:8001/feign/skills";

  getSkillSetUrl(mentorId: string):string{
    return (this.skillAPIUrl + "/" + mentorId);
  }

  getAllSkillsUrl():string{
    return (this.skillAPIUrl+"/getSkills");
  }

  getMentorSkillsUrl(mentorId: string): string {
    return (this.skillAPIUrl + "/" + mentorId);
  }

  constructor() { }
}
