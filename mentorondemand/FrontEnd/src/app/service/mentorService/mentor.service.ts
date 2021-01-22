import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MentorConfigService } from 'src/app/config/mentor/mentor-config.service';

import { Router } from '@angular/router';

import { MentorModule } from 'src/app/module/mentor.module';

import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MentorService {

  constructor(
    private httpClient: HttpClient,
    private mentorConfig: MentorConfigService,
    private router: Router) { }

  getLoginMentor(): MentorModule {
    return JSON.parse(localStorage.getItem("mentorLoggedIn"));
  }

  public getMentors(): Observable<MentorModule[]> {
    return this.httpClient.get<MentorModule[]>(this.mentorConfig.getMentorsUrl(), httpOptions);
  }

  public getMentor(mentorId: number): Observable<MentorModule> {
    return this.httpClient.get<MentorModule>(this.mentorConfig.getMentorUrl(mentorId), httpOptions);
  }

  public signUp(mentorData: MentorModule): Observable<any> {
    return this.httpClient.post<any>(this.mentorConfig.getMentorSignUpUrl(), mentorData, httpOptions);
  }

  public updateMentor(mentorData: MentorModule): Observable<MentorModule> {
    return this.httpClient.put<MentorModule>(this.mentorConfig.updMentorUrl(), mentorData, httpOptions);
  }

  public signIn(mentorData: MentorModule): Observable<any> {
    var returnMentor = this.httpClient.post<any>(this.mentorConfig.getMentorSignInUrl(), mentorData, httpOptions);
    return returnMentor;
  }

  getMentorByUserProposal(mentorIdArray: number[]): Observable<MentorModule[]> {
    return this.httpClient.post<MentorModule[]>(this.mentorConfig.getMentorProposalByUserUrl(), mentorIdArray);
  }

  searchMentorByKey(searchKey: string): Observable<MentorModule[]> {
    return this.httpClient.get<MentorModule[]>(this.mentorConfig.searchMentorByKeyUrl(searchKey), httpOptions);
  }
}
