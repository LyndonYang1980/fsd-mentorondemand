import { Component, OnInit } from '@angular/core';
import { MentorConfigService } from 'src/app/config/mentor/mentor-config.service';
import { Router } from '@angular/router';
import { MentorService } from 'src/app/service/mentorService/mentor.service';
import { NgForm } from '@angular/forms';
import { TokenStorageService } from 'src/app/service/tokenStorageService/token-storage.service';
import { MentorModule } from 'src/app/module/mentor.module';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.css']
})
export class MentorLoginComponent implements OnInit {

  loginFlag: boolean;
  role: string = "MENTOR";
  msg: string;

  constructor(private mentorConfig: MentorConfigService,
    private tokenService: TokenStorageService,
    private mentorService: MentorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(mentorLoginForm: NgForm) {
    this.mentorService.signIn(mentorLoginForm.value)
      .subscribe((data) => {
        if (data != null) {
          this.tokenService.saveToken(data.accessToken);
          let mentorData: MentorModule = data.objData.mentorObj;
          this.tokenService.saveUser("mentorLoggedIn", mentorData);
          this.tokenService.saveUser("isMentorLoggedIn", true);
          this.loginFlag = true;
          this.router.navigate(['mentorProfile']).then(() => {
            location.reload();
          });
        } else {
          this.loginFlag = false;
          this.msg = "Mentor name or password invalid"
        }
      }, (err) => {
        this.loginFlag = false;
        this.msg = "Login failed due to error"
      })
  }

}
