import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/userService/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TokenStorageService } from 'src/app/service/tokenStorageService/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFlag: boolean;
  role: string = "USER";
  msg: string;
  constructor(private userService: UserService,
    private tokenService: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.loginFlag = true;
    }
  }

  onSubmit(userLoginForm: NgForm) {
    this.userService.signIn(userLoginForm.value)
      .subscribe((data?) => {
        if (data != null) {
          this.tokenService.saveToken(data.accessToken);
          this.tokenService.saveUser("userLoggedIn", data);
          this.tokenService.saveUser("isUserLoggedIn", true);
          this.loginFlag = true;
          this.router.navigate(['userDashboard']).then(() => {
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

  // onSubmit(userLoginForm: NgForm) {
  //   this.userService.loginUser(userLoginForm.value)
  //     .subscribe((userData?) => {
  //       if (userData != null) {
  //         localStorage.setItem('isUserLoggedIn', 'true');
  //         localStorage.setItem('userLoggedIn', JSON.stringify(userData));
  //         this.router.navigate(['userDashboard']).then(() => {
  //           location.reload();
  //         });
  //       } else {
  //         this.loginFlag = false;
  //         this.msg = "User name or password invalid"
  //       }
  //     },
  //       (error) => {
  //         this.msg = "Login failed due to error"
  //       });
  // }
}
