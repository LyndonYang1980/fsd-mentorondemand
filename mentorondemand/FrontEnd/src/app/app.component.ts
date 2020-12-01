import { Component, OnChanges, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'FrontEnd';
  isUserLoggedIn: string = "no";
  isMentorLoggedIn: string = "no"

  constructor() {
   
  }

  ngOnInit() {
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    this.isMentorLoggedIn = localStorage.getItem('isMentorLoggedIn');
    console.log("App component ts inside of it")
  }

  ngOnChanges() {
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    this.isMentorLoggedIn = localStorage.getItem('isMentorLoggedIn');
    console.log("changes inside running");
    console.log(this.isUserLoggedIn + this.isMentorLoggedIn);
  }
}
