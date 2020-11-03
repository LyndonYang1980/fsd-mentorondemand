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

  //Adding a user
  public createUser(userData: UserModule): Observable<UserModule>{
    return this.httpClient.post<UserModule>(this.userConfig.getUserRegistrationURL(), userData, httpOptions);
  }

  //Login of user
  public loginUser(user:UserModule):Observable<UserModule>{
    
    console.log("Logging the user")
    return this.httpClient.post<UserModule>(this.userConfig.getUserLoginURL(),user,httpOptions);

  }
}
