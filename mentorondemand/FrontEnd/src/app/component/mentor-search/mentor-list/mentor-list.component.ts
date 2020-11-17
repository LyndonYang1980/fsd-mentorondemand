import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {
  mentorArray: MentorModule[];

  @Input() mentorData: MentorModule;
  constructor() { }

  ngOnInit() {
    this.mentorArray = JSON.parse(localStorage.getItem('allMentor'));
  }

  @Output() onSelectingMentor = new EventEmitter<MentorModule>();

  mentorElaborate(mentor: MentorModule) {
    this.onSelectingMentor.emit(mentor);
  }
}
