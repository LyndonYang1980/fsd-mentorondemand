import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillConfigService {

  private skillAPIUrl = "http://localhost/feign/skills";

  getSkillSetUrl(mentorId: number): string {
    return (this.skillAPIUrl + "/${mentorId}");
  }

  getSkillsUrl(): string {
    return (this.skillAPIUrl + "/getSkills");
  }

  addSkillUrl(): string {
    return (this.skillAPIUrl + "/addSkill");
  }

  getSkillUrl(skillId: number): string {
    return (this.skillAPIUrl + "/${skillId}");
  }

  getMentorSkillsUrl(mentorId: number): string {
    return (this.skillAPIUrl + "/getMentorSkills/${mentorId}");
  }

  constructor() { }
}
