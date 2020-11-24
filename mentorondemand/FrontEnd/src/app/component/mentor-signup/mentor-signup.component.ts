import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/service/mentorService/mentor.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {

  // mentorEnteredEmail: any;

  constructor(private mentorService: MentorService,
    private Route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.mentorService.addMentor(f.value)
      .subscribe(() => {
        console.log("mentor Registered");
        this.Route.navigate(['mentorLogin'])
      }, (error) => {
        console.log(error);
      })
  }
}
