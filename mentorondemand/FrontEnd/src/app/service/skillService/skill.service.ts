import { Injectable } from '@angular/core';

import { SkillModule } from "../../module/skill.module";

import { mentorModule } from "../../module/mentor.module";

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SkillConfigService } from "../../config/skill/skill-config.service";

import { Observable, observable } from 'rxjs';

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

  private loggedMentor: mentorModule;
  
  constructor(
    private httpClient: HttpClient, 
    private skillConfig: SkillConfigService, private router: Router) { 
    
      this.loggedMentor = JSON.parse(localStorage.getItem('mentor'));
    }
  
  setSkills(skill: SkillModule, mentorId: number): Observable<SkillModule>{
    return this.httpClient.post<SkillModule>(this.skillConfig.getSkillSetUrl(mentorId), skill, httpOptions);
  }

  addSkill(skill: SkillModule):Observable<SkillModule>{
    return this.httpClient.post<SkillModule>(this.skillConfig.addSkillUrl(), skill, httpOptions);
  }

  getSkills(): Observable<SkillModule[]>{
    return this.httpClient.get<SkillModule[]>(this.skillConfig.getSkillsUrl(), httpOptions);
  }

  getSkill(skillId: number): Observable<SkillModule>{
    return this.httpClient.get<SkillModule>(this.skillConfig.getSkillUrl(skillId), httpOptions);
  }

  getMentorSkills(): Observable<SkillModule>{
    var mentorId = this.loggedMentor.mentorId;
    return this.httpClient.get<SkillModule>(this.skillConfig.getMentorSkillsUrl(mentorId), httpOptions);
  }
}
