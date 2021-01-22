import { Component, OnInit } from '@angular/core';
import { MentorConfigService } from 'src/app/config/mentor/mentor-config.service';
import { Router } from '@angular/router';
import { MentorService } from 'src/app/service/mentorService/mentor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.css']
})
export class MentorLoginComponent implements OnInit {

  loginFlag: boolean;
  role:string = "MENTOR";
  msg: string;

  constructor(private mentorConfig: MentorConfigService,
    private mentorService: MentorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(mentorLoginForm: NgForm) {
    this.mentorService.loginMentor(mentorLoginForm.value)
      .subscribe((mentorData) => {
        if (mentorData != null) {
          localStorage.setItem('isMentorLoggedIn', 'true');
          localStorage.setItem('mentorLoggedIn', JSON.stringify(mentorData));
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
