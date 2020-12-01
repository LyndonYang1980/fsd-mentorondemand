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

  constructor(private mentorConfig:MentorConfigService,
              private mentorService:MentorService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(mentorLoginForm: NgForm) {
    this.mentorService.loginMentor(mentorLoginForm.value)
      .subscribe((data)=>{
          localStorage.setItem('isMentorLoggedIn','true');
          console.log("Mentor logged in: " + JSON.stringify(data));
          localStorage.setItem('mentorLoggedIn',JSON.stringify(data));
          this.router.navigate(['mentorpage']).then(() => {
            console.log("Navigated to mentor dashboard")
            location.reload();       
          });

      },()=>{
          console.log("No mentor found");
      })
  }

}
