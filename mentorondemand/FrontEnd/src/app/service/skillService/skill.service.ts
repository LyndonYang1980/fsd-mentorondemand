import { Injectable } from '@angular/core';

import { SkillModule } from "../../module/skill.module";

import { MentorModule } from "../../module/mentor.module";

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SkillConfigService } from "../../config/skill/skill-config.service";

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private loggedMentor: MentorModule;

  constructor(
    private httpClient: HttpClient,
    private skillConfig: SkillConfigService, private router: Router) {

    // this.loggedMentor = JSON.parse(localStorage.getItem('mentor'));
  }

  setSkills(skill: SkillModule, mentorId: number): Observable<SkillModule> {
    return this.httpClient.post<SkillModule>(this.skillConfig.getSkillSetUrl(mentorId), skill, httpOptions);
  }

  addSkill(skill: SkillModule): Observable<SkillModule> {
    return this.httpClient.post<SkillModule>(this.skillConfig.addSkillUrl(), skill, httpOptions);
  }

  getSkills(): Observable<SkillModule[]> {
    return this.httpClient.get<SkillModule[]>(this.skillConfig.getSkillsUrl(), httpOptions);
  }

  getSkill(skillId: number): Observable<SkillModule> {
    return this.httpClient.get<SkillModule>(this.skillConfig.getSkillUrl(skillId), httpOptions);
  }

  updateSkill(skill: SkillModule): Observable<SkillModule> {
    return this.httpClient.put<SkillModule>(this.skillConfig.updSkillUrl(), skill, httpOptions);
  }

  findExistingskills(skillName: string, mentorId: number): Observable<boolean> {
    return this.httpClient.post<boolean>(this.skillConfig.existingSkillUrl1(skillName, mentorId), httpOptions);
  }

  findExistingSkills(skill: SkillModule): Observable<boolean>{
    return this.httpClient.post<boolean>(this.skillConfig.existingSkillUrl2(), skill, httpOptions);
  }

  getMentorSkills(mentorId: number): Observable<SkillModule[]> {
    let id = mentorId;
    return this.httpClient.get<SkillModule[]>(this.skillConfig.getMentorSkillsUrl(mentorId), httpOptions);
  }

  deleteSkill(skillId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.skillConfig.delSkillUrl(skillId), httpOptions);
  }
}
