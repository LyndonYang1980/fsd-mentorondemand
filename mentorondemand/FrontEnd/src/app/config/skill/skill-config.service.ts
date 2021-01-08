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

  updSkillUrl(): string {
    return (this.skillAPIUrl);
  }

  existingSkillUrl1(skillName: string, mentorId: number): string {
    return (this.skillAPIUrl + "/findExistingSkills1/" + skillName + "/" + mentorId);
  }

  existingSkillUrl2(): string {
    return (this.skillAPIUrl + "/findExistingSkills2");
  }

  getSkillUrl(skillId: number): string {
    return (this.skillAPIUrl + "/" + skillId);
  }

  getMentorSkillsUrl(mentorId: number): string {
    return (this.skillAPIUrl + "/getMentorSkills/" + mentorId);
  }

  delSkillUrl(skillId: number): string {
    return (this.skillAPIUrl + "/" + skillId);
  }

  constructor() { }
}
