import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  private userAPIUrl = "http://localhost:8021/feign/users";
  
  // URL for adding a user
  getUserRegistrationURL():string{
    return (this.userAPIUrl + "/addUser");
  }

  //URL for logging a user
  getUserLoginURL():string{
    return (this.userAPIUrl + "/login");
  }

  constructor() { }
}
