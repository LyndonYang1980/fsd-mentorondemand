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

  getUserUrl(id: number): string{
    return (this.userAPIUrl + "/{id}");
  }

  // URL for adding a user
  getUserAddedURL():string{
    return (this.userAPIUrl + "/addUser");
  }

  //URL for logging a user
  getUserLoginURL():string{
    return (this.userAPIUrl + "/login");
  }
}
