import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  private userAPIUrl = "http://localhost/feign/users";
  
  constructor() { }
  
  getUsersUrl(): string{
    return (this.userAPIUrl + "/getUsers");
  }

  getUserUrl(userId: number): string{
    return (this.userAPIUrl + "/" + userId);
  }

  // URL for adding a user
  getUserAddedURL():string{
    return (this.userAPIUrl + "/signup");
  }

  updUserUrl():string {
    return (this.userAPIUrl);
  }

  //URL for logging a user
  getUserLoginURL():string{
    return (this.userAPIUrl + "/signin");
  }
}
