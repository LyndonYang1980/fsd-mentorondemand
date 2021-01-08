import { Time } from '@angular/common';

export class CalendarModule { 

  constructor(
    public calendarId: number,
    public mentorId: number,
    public startDate: Date,
    public endDate: Date,
    public startTime: Date,
    public endTime: Date
    
  ) { }
}
