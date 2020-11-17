import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarConfigService {

  constructor() { }

  private calendarAPIUrl = "http://localhost/feign/calendars";

  getCalendarsUrl(){
    return (this.calendarAPIUrl);
  }

  getCalendarUrl(calendarId: number){
    return (this.calendarAPIUrl + "/${calendarId}");
  }

  getCalendarAddedUrl(){
    return (this.calendarAPIUrl);
  }

  getCalendarUpdUrl(){
    return (this.calendarAPIUrl);
  }

  getCalendarDelUrl(calendarId: number){
    return (this.calendarAPIUrl + "${calendarId}");
  }
}
