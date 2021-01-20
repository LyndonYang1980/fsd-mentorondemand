import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms";
import { UserService } from 'src/app/service/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  userEnteredEmail='';
  constructor(private userService: UserService,  
              private Route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.userService.signUp(f.value)
      .subscribe((data)=>{
          this.Route.navigate(['login'])
      },(error)=>{
        console.log("Error in adding user")
      });
  }
}
