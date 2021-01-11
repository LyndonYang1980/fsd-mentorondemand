import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MentorModule } from 'src/app/module/mentor.module';
import { SkillModule } from 'src/app/module/skill.module';

@Component({
  selector: 'app-mentor-details-modal',
  templateUrl: './mentor-details-modal.component.html',
  styleUrls: ['./mentor-details-modal.component.css']
})
export class MentorDetailsModalComponent implements OnInit {

  mentorData: MentorModule;
  skillList: SkillModule[];
  skills: string;
  skillArr = [];

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.getMentorSkills();
  }

  getMentorSkills() {
    this.skillList = this.mentorData.skills;
    this.skillList.forEach((m) => {
      this.skillArr.push(m.skillName);
    });
    this.skills = this.skillArr.toLocaleString();
  }

  onClick: any;

  click() {
    this.bsModalRef.hide();
  }
}
