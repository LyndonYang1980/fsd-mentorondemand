import { Component, EventEmitter, Injectable, OnChanges, OnInit, Output, AfterViewInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnChanges {
  isUserLoggedIn: string = "false";
  isMentorLoggedIn: string = "false";


  constructor() {
    
  }

  @Output() OnSelectingMenuOption = new EventEmitter<string>();
  ngOnInit() {

    if (localStorage.getItem('isUserLoggedIn') === null) {
      this.isUserLoggedIn = 'false';
    } else {
      this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    }
    if (localStorage.getItem('isMentorLoggedIn') === null) {
      this.isMentorLoggedIn = 'false';
    } else {
      this.isMentorLoggedIn = localStorage.getItem('isMentorLoggedIn');
    }
  }

  ngOnChanges() {
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    this.isMentorLoggedIn = localStorage.getItem('isMentorLoggedIn');
  }



  selectedMenuOption(option: string) {
    this.OnSelectingMenuOption.emit(option);
  }

  getUserLogOut() {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.setItem('isUserLoggedIn', 'false');
  }

  getMentorLogOut() {
    localStorage.removeItem('isMentorLoggedIn');
    localStorage.setItem('isMentorLoggedIn', 'false');
  }
}
