import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalendarModule } from 'src/app/module/calendar.module';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { CalendarService } from 'src/app/service/calendarService/calendar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { Time } from '@angular/common';
import { MentorService } from 'src/app/service/mentorService/mentor.service';
import { MentorModule } from 'src/app/module/mentor.module';

@Component({
  selector: 'app-mentor-new-calendar',
  templateUrl: './mentor-new-calendar.component.html',
  styleUrls: ['./mentor-new-calendar.component.css']
})
export class MentorNewCalendarComponent implements OnInit {

  calendarForm: FormGroup;
  calendarId: number;
  mentorData: MentorModule;
  calendarData: CalendarModule;
  bsModalRef: BsModalRef
  bsConfig: Partial<BsDatepickerConfig>;
  startDate: Date;
  endDate: Date;
  startTime: Date;
  endTime: Date;
  editMode: boolean = false;
  title: string;
  msg: string;

  formErrors = {
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: ''
  };

  validationMessage = {
    'startDate': {
      'required': 'Please input start date',
    },

    'endDate': {
      'required': 'Please input end date',
    },

    'startTime': {
      'required': 'Please input start time',
    },

    'endTime': {
      'required': 'Please input end time'
    }

  };

  constructor(private formBuilder: FormBuilder, private calendarService: CalendarService,
    private mentorService: MentorService, private bsModalService: BsModalService,
    private router: Router) { }

  ngOnInit(): void {
    this.bsConfig = Object.assign({}, { isAnimated: true, dateInputFormat: 'YYYY-MM-DD' });
    this.mentorData = this.mentorService.getLoginMentor();
    this.buildForm();
  }

  buildForm() {

    this.calendarForm = this.formBuilder.group(
      {
        calendarId: [{ value: (this.calendarData == null) ? '' : this.calendarData.calendarId, disabled: false }],
        startDate: [{ value: (this.calendarData == null) ? '' : this.calendarData.startDate, disabled: false }, Validators.required],
        endDate: [{ value: (this.calendarData == null) ? '' : this.calendarData.endDate, disabled: false }, Validators.required],
        startTime: [{ value: (this.calendarData == null) ? '' : this.calendarData.startTime, disabled: false }, Validators.required],
        endTime: [{ value: (this.calendarData == null) ? '' : this.calendarData.endTime, disabled: false }, Validators.required],
      }
    );

    this.calendarForm.valueChanges.subscribe(
      data => this.onValueChange(data)
    );
  }

  onValueChange(data?: any) {

    if (!this.calendarForm) { return; }
    const fGroup = this.calendarForm;

    for (const field in this.formErrors) {
      // Clear current error msg
      this.formErrors[field] = '';
      // Get current form control
      const control = fGroup.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + '\n';
        }
      }
    }
  }

  genCalendarObj(): CalendarModule {
    let cId: number = null;
    let mId: number = this.mentorData.mentorId;
    let sDate: Date = this.calendarForm.get('startDate').value;
    let eDate: Date = this.calendarForm.get('endDate').value;
    let sTime: Date = this.calendarForm.get('startTime').value;
    let eTime: Date = this.calendarForm.get('endTime').value;

    let hours: number = sTime.getHours();
    let mins: number = sTime.getMinutes();

    let retCalendar: CalendarModule = new CalendarModule(cId, mId, sDate, eDate, sTime, eTime);
    return retCalendar;
  }

  onSubmit() {
    this.calendarData = this.genCalendarObj();

    this.calendarService.findExistingCalendar1(this.calendarData).subscribe(
      (result) => {
        if (result.length > 0) {
          this.msg = "The calendar with the same date/time already exists";
          this.showMsgModal(this.msg, null);
        } else {
          this.calendarService.addCalendar(this.calendarData).subscribe(
            (calendarData) => {
              if (calendarData != null) {
                this.msg = "Calendar successfully added";
              } else {
                this.msg = "Calendar failed to add due to error";
              }
              this.showMsgModal(this.msg, 'mentorcalendars');
            }
          )
        }
      }
    )
  }

  showMsgModal(msg: string, nextPage: string) {

    const initialState = {
      title: 'Information',
      msg: msg
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      if (nextPage != null) {
        this.router.navigate([nextPage]);
      }
    }
  }
}
