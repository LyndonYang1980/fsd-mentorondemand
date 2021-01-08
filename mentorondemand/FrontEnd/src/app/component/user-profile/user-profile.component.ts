import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/module/user.module';
import { UserService } from 'src/app/service/userService/user.service';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData: UserModule;
  regDate: Date;
  bsConfig: Partial<BsDatepickerConfig>;
  msg: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.bsConfig = Object.assign({}, { isAnimated: true, dateInputFormat: 'YYYY-MM-DD' });
    this.userData = this.userService.getLoginUser();
    this.regDate = new Date(this.userData.regDate);
  }

  onSubmit(f: NgForm) {
    let user:UserModule = f.value;
    this.userService.updateUser(user)
      .subscribe((userData) => {
        if (userData != null) {
          this.msg = "Your profile updated successfully!"
          localStorage.setItem("userLoggedIn", JSON.stringify(userData));
        } else {
          this.msg = "Your profile not updated due to error!"
        }
      });
  }
}
