import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms";
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  userEnteredEmail='';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.userService.addUser(f.value)
      .subscribe((data)=>{
          console.log("User created")
      },(error)=>{
        console.log("Error in adding user")
      });
  }
}
