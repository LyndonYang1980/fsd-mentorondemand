import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  public getCalendars(): Observable<CalendarModule[]>{
    return this.httpClient.get<CalendarModule[]>(this.calendarConfig.getCalendarsUrl(), httpOptions);
  }

  public getCalendar(calendarId: number): Observable<CalendarModule>{
    return this.httpClient.get<CalendarModule>(this.calendarConfig.getCalendarUrl(calendarId), httpOptions);
  }

  public addCalendar(): Observable<CalendarModule>{
    return this.httpClient.post<CalendarModule>(this.calendarConfig.getCalendarAddedUrl(), httpOptions);
  }

  public updateCalendar(): Observable<CalendarModule>{
    return this.httpClient.put<CalendarModule>(this.calendarConfig.getCalendarUpdUrl(), httpOptions);
  }

  public deleteCalendar(calendarId: number){
    this.httpClient.delete(this.calendarConfig.getCalendarDelUrl(calendarId), httpOptions);
  }
}
