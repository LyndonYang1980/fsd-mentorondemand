import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';
import { UserModule } from 'src/app/module/user.module';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MentorDetailsModalComponent } from '../../mentor-details-modal/mentor-details-modal.component';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  mentorData: MentorModule;
  isUserLoggedIn: string;
  userLoggedIn: UserModule;
  bsModalRef: BsModalRef;
  @Input() mentorList: MentorModule[];

  constructor(private bsModalService: BsModalService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
  }

  showMentorDetailModal(mentorData: MentorModule) {

    const initialState = {
      mentorData: mentorData
    };

    this.bsModalRef = this.bsModalService.show(MentorDetailsModalComponent, { initialState });
    this.bsModalRef.content.onClick = () => {

    }
  }
}
