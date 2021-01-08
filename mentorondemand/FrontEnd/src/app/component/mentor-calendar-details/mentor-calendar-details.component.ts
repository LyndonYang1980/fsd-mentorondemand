import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CalendarModule } from 'src/app/module/calendar.module';
import { CalendarService } from 'src/app/service/calendarService/calendar.service';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Time } from '@angular/common';

@Component({
  selector: 'app-mentor-calendar-details',
  templateUrl: './mentor-calendar-details.component.html',
  styleUrls: ['./mentor-calendar-details.component.css']
})
export class MentorCalendarDetailsComponent implements OnInit {

  calendarForm: FormGroup;
  calendarId: number;
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
    private activeRouter: ActivatedRoute, private bsModalService: BsModalService,
    private router: Router) { }

  ngOnInit(): void {
    this.getParams();
  }

  buildForm() {

    let sDate: Date = (this.calendarData.startDate == null) ? null : new Date(this.calendarData.startDate);
    let eDate: Date = (this.calendarData.endDate == null) ? null : new Date(this.calendarData.endDate);
    let sTime: Date = (this.calendarData.startTime == null) ? null : new Date(this.calendarData.startTime);
    let eTime: Date = (this.calendarData.endTime == null) ? null : new Date(this.calendarData.endTime);

    this.calendarForm = this.formBuilder.group(
      {
        calendarId: [{ value: this.calendarData.calendarId, disabled: true }],
        startDate: [{ value: sDate, disabled: true }, Validators.required],
        endDate: [{ value: eDate, disabled: true }, Validators.required],
        startTime: [{ value: sTime, disabled: true }, Validators.required],
        endTime: [{ value: eTime, disabled: true }, Validators.required],
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

  onEdit() {
    this.calendarForm.get('startDate').enable({ emitEvent: false });
    this.calendarForm.get('endDate').enable({ emitEvent: false });
    this.calendarForm.get('startTime').enable({ emitEvent: false });
    this.calendarForm.get('endTime').enable({ emitEvent: false });
    this.editMode = true;
  }

  genCalendarObj(): CalendarModule {
    let cId: number = this.calendarData.calendarId;
    let mId: number = this.calendarData.mentorId;
    let sDate: Date = this.calendarForm.get('startDate').value;
    let eDate: Date = this.calendarForm.get('endDate').value;
    let sTime: Date = this.calendarForm.get('startTime').value;
    let eTime: Date = this.calendarForm.get('endTime').value;

    let retCalendar: CalendarModule = new CalendarModule(cId, mId, sDate, eDate, sTime, eTime);
    return retCalendar;
  }

  onSubmit() {
    this.calendarData = this.genCalendarObj();
    this.calendarService.findExistingCalendar2(this.calendarData).subscribe(
      (result) => {
        if (result.length > 0) {
          this.msg = "The calendar with the same date/time already exists";
          this.showMsgModal(this.msg, null);
        } else {
          this.calendarService.addCalendar(this.calendarData).subscribe(
            (calendarData) => {
              if (calendarData != null) {
                this.msg = "Calendar updated successfully!";
              } else {
                this.msg = "Calendar not updated due to error";
              }
              this.showMsgModal(this.msg, null);
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
      } else {
        location.reload();
      }
    }
  }

  getParams() {
    this.activeRouter.queryParams.subscribe(
      (params) => {
        this.calendarId = params.calendarId;
        this.getCalendar(this.calendarId);
      })
  }

  getCalendar(calendarId: number) {
    this.calendarService.getCalendar(calendarId).subscribe((calendar) => {
      this.calendarData = calendar;
      this.buildForm();
    }
    )
  }
}
