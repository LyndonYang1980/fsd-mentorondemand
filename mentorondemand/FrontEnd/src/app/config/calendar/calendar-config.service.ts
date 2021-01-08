import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarConfigService {

  constructor() { }

  private calendarAPIUrl = "http://localhost/feign/calendars";

  getCalendarsUrl() {
    return (this.calendarAPIUrl);
  }

  getCalendarUrl(calendarId: number) {
    return (this.calendarAPIUrl + "/" + calendarId);
  }

  getMentorCalendarsUrl(mentorId: number) {
    return (this.calendarAPIUrl + "/getMentorCalendars/" + mentorId);
  }

  findExistingCalendar1Url(){
    return (this.calendarAPIUrl + "/findExistingCalendar1");
  }

  findExistingCalendar2Url(){
    return (this.calendarAPIUrl + "/findExistingCalendar2");
  }

  addCalendarUrl() {
    return (this.calendarAPIUrl);
  }

  updCalendarUrl() {
    return (this.calendarAPIUrl);
  }

  delCalendarUrl(calendarId: number) {
    return (this.calendarAPIUrl + "/" + calendarId);
  }
}
