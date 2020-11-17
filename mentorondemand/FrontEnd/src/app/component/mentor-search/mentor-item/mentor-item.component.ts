import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';

@Component({
  selector: 'app-mentor-item',
  templateUrl: './mentor-item.component.html',
  styleUrls: ['./mentor-item.component.css']
})
export class MentorItemComponent implements OnInit {

  @Input() mentorData: MentorModule;
  @Output() selectMentorEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  mentorElaborate() {
    this.selectMentorEvent.emit();
  }
}
