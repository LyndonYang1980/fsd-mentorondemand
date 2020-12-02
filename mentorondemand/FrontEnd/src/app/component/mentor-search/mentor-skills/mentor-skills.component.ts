import { Component, OnInit, Input } from '@angular/core';
import { SkillModule } from 'src/app/module/skill.module';
import { MentorModule } from 'src/app/module/mentor.module';

@Component({
  selector: 'app-mentor-skills',
  templateUrl: './mentor-skills.component.html',
  styleUrls: ['./mentor-skills.component.css']
})
export class MentorSkillsComponent implements OnInit {

  @Input() mentorData: MentorModule;
  mentorSkills: SkillModule[];
  skills: string;
  skillArr = [];

  constructor() {

  }

  ngOnInit(): void {

    this.initData();
  }

  initData() {
    this.mentorSkills = this.mentorData.skills;
    this.mentorSkills.forEach((m) => {
      this.skillArr.push(m.skillName);
    });
    this.skills = this.skillArr.toLocaleString();
    console.log("Exporting mentor skills:" + this.skills);
  }


}
