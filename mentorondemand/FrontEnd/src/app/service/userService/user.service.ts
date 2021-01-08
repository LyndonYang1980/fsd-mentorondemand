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

  public addUser(userData: UserModule): Observable<UserModule> {
    return this.httpClient.post<UserModule>(this.userConfig.getUserAddedURL(), userData, httpOptions);
  }

  public updateUser(userData: UserModule): Observable<UserModule>{
    return this.httpClient.put<UserModule>(this.userConfig.updUserUrl(), userData, httpOptions);
  }
  
  public loginUser(userData: UserModule): Observable<UserModule> {

    console.log("Logging the user")
    return this.httpClient.post<UserModule>(this.userConfig.getUserLoginURL(), userData, httpOptions);
  }
}
