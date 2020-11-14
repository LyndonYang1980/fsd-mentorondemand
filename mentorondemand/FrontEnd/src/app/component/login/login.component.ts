import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/userService/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(userLoginForm: NgForm) {
    this.userService.loginUser(userLoginForm.value)
      .subscribe((data) => {
        localStorage.setItem('isUserLoggedIn', 'true');
        localStorage.setItem('UserLoggedIn', JSON.stringify(data));
        this.router.navigate(['userpage']).then(() => {
          console.log("Navigated to user home page")
        });
      },
        (error) => {
          console.log(error)
        });
  }
}
