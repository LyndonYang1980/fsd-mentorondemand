import { Injectable } from '@angular/core';

import { UserModule } from "../../module/user.module";

import { UserConfigService } from "../../config/user/user-config.service";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Router, Routes } from "@angular/router";

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private httpClient: HttpClient,
    private userConfig: UserConfigService,
    private router: Router) { }

  public getLoginUser(): UserModule {
      return JSON.parse(localStorage.getItem('userLoggedIn'));
    }

  public getUsers(): Observable<UserModule[]> {
    return this.httpClient.get<UserModule[]>(this.userConfig.getUsersUrl(), httpOptions);
  }

  public getUser(userId: number) {
    return this.httpClient.get<UserModule>(this.userConfig.getUserUrl(userId), httpOptions);
  }

  public signUp(userData: UserModule): Observable<any> {
    return this.httpClient.post<any>(this.userConfig.getUserAddedURL(), userData, httpOptions);
  }

  public updateUser(userData: UserModule): Observable<UserModule>{
    return this.httpClient.put<UserModule>(this.userConfig.updUserUrl(), userData, httpOptions);
  }
  
  public signIn(userData: UserModule): Observable<any> {
    return this.httpClient.post<any>(this.userConfig.getUserLoginURL(), userData, httpOptions);
  }

  // public signIn(userData: UserModule): Observable<any> {
  //   let userName = userData.userName;
  //   let userPassword = userData.userPassword;
  //   return this.httpClient.post(this.userConfig.getUserLoginURL(userName, userPassword), httpOptions);
  // }
}
