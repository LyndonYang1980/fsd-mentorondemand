import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalendarConfigService } from 'src/app/config/calendar/calendar-config.service';
import { Router } from '@angular/router';
import { CalendarModule } from 'src/app/module/calendar.module';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(
    private httpClient: HttpClient,
    private calendarConfig: CalendarConfigService,
    private router: Router) { }

  public getCalendars(): Observable<CalendarModule[]> {
    return this.httpClient.get<CalendarModule[]>(this.calendarConfig.getCalendarsUrl(), httpOptions);
  }

  public getCalendar(calendarId: number): Observable<CalendarModule> {
    return this.httpClient.get<CalendarModule>(this.calendarConfig.getCalendarUrl(calendarId), httpOptions);
  }

  public getMentorCalendars(mentorId: number): Observable<CalendarModule[]> {
    return this.httpClient.get<CalendarModule[]>(this.calendarConfig.getMentorCalendarsUrl(mentorId), httpOptions);
  }

  public findExistingCalendar1(calendar: CalendarModule): Observable<CalendarModule[]> {
    return this.httpClient.post<CalendarModule[]>(this.calendarConfig.findExistingCalendar1Url(), calendar, httpOptions);
  }

  public findExistingCalendar2(calendar: CalendarModule): Observable<CalendarModule[]> {
    return this.httpClient.post<CalendarModule[]>(this.calendarConfig.findExistingCalendar2Url(), calendar, httpOptions);
  }

  public addCalendar(calendar: CalendarModule): Observable<CalendarModule> {
    return this.httpClient.post<CalendarModule>(this.calendarConfig.addCalendarUrl(), calendar, httpOptions);
  }

  public updateCalendar(calendar: CalendarModule): Observable<CalendarModule> {
    return this.httpClient.put<CalendarModule>(this.calendarConfig.updCalendarUrl(), calendar, httpOptions);
  }

  public deleteCalendar(calendarId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.calendarConfig.delCalendarUrl(calendarId), httpOptions);
  }
}
