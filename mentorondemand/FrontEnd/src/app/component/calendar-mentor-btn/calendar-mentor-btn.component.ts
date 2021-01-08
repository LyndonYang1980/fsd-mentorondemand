import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from 'src/app/service/calendarService/calendar.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CalendarModule } from 'src/app/module/calendar.module';
import { Router } from '@angular/router';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-calendar-mentor-btn',
  templateUrl: './calendar-mentor-btn.component.html',
  styleUrls: ['./calendar-mentor-btn.component.css']
})
export class CalendarMentorBtnComponent implements OnInit {

  @Input() calendarId: number;
  calendarData: CalendarModule;
  bsModalRef: BsModalRef;
  msg: string;

  constructor(private calendarService: CalendarService, private bsModalService: BsModalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  showMsgModal(msg: string) {

    const initialState = {
      title: 'Information',
      msg: msg
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      // this.retProposalData.emit(this.proposalData);
      location.reload();
    }
  }

  viewCalendar() {
    this.router.navigate(['mentorcalendardetails'], {
      queryParams: {
        calendarId: this.calendarId
      }
    });
  }

  deleteCalendar() {
    this.calendarService.deleteCalendar(this.calendarId).subscribe(
      (result) => {
        if (result) {
          this.msg = "Calendar deleted successfully!";
        } else {
          this.msg = "Calendar not deleted due to error";
        }
        this.showMsgModal(this.msg);
      }
    )
  }
}
