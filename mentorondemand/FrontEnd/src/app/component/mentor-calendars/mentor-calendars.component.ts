import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/service/calendarService/calendar.service';
import { MentorModule } from 'src/app/module/mentor.module';
import { CalendarModule } from 'src/app/module/calendar.module';
import { MentorService } from 'src/app/service/mentorService/mentor.service';

@Component({
  selector: 'app-mentor-calendars',
  templateUrl: './mentor-calendars.component.html',
  styleUrls: ['./mentor-calendars.component.css']
})
export class MentorCalendarsComponent implements OnInit {

  
  mentorData: MentorModule;
  calendarList: CalendarModule[];

  constructor(private mentorService: MentorService, private calendarService: CalendarService, private router: Router) { }

  ngOnInit(): void {
    this.mentorData = this.mentorService.getLoginMentor();
    this.getMentorCalendarData();
  }

  getMentorCalendarData() {
    this.calendarService.getMentorCalendars(this.mentorData.mentorId).subscribe(
      (calendarList) => {
        if (calendarList != null) {
          this.mentorData.calendars = calendarList;
          localStorage.setItem("mentorLoggedIn", JSON.stringify(this.mentorData));
        }
        this.calendarList = this.mentorData.calendars.sort((n1, n2) => n1.calendarId - n2.calendarId);
      }
    )
  }

  newCalendar() {
    let mentorId: number = this.mentorData.mentorId;
    this.router.navigate(['mentornewcalendar'], {
      queryParams: {
        mentorId: mentorId
      }
    });
  }

  viewCalendar(calendarId: number) {
    this.router.navigate(['mentorcalendars'], {
      queryParams: {
        calendarId: calendarId
      }
    });
  }

}
