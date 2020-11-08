import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillConfigService {

  private skillAPIUrl = "http://localhost:8001/feign/skills";

    getSkillSetUrl(mentorId: number):string{
    return (this.skillAPIUrl + "/${mentorId}");
  }

  getSkillsUrl():string{
    return (this.skillAPIUrl+"/getSkills");
  }

  getSkillUrl(mentorId: number): string {
    return (this.skillAPIUrl + "/{mentorId}");
  }

  getMentorSkillsUrl(mentorId: string): string {
    return (this.skillAPIUrl + "/" + mentorId);
  }

  constructor() { }
}
