import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarConfigService } from 'src/app/config/calendar/calendar-config.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(
    private httpClient: HttpClient,
    private calendarConfig: CalendarConfigService,
    private router: Router) { }

  
}
