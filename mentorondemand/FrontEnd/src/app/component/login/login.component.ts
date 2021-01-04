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

  loginFlag: boolean;
  msg: string;
  constructor(private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(userLoginForm: NgForm) {
    this.userService.loginUser(userLoginForm.value)
      .subscribe((userData?) => {
        if (userData != null) {
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('userLoggedIn', JSON.stringify(userData));
          this.router.navigate(['userpage']).then(() => {
            location.reload();
          });
        } else {
          this.loginFlag = false;
          this.msg = "User name or password invalid"
        }
      },
        (error) => {
          this.msg = "Login failed due to error"
        });
  }
}
