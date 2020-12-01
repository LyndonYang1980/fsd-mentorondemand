import { Component, OnInit, Input } from '@angular/core';
import { SkillModule } from 'src/app/module/skill.module';

@Component({
  selector: 'app-mentor-skills',
  templateUrl: './mentor-skills.component.html',
  styleUrls: ['./mentor-skills.component.css']
})
export class MentorSkillsComponent implements OnInit {

  @Input() mentorSkills: SkillModule[];
  skills: string;
  skillArr = [];
  
  constructor() {

   }

  ngOnInit(): void {
    
   this.getMentorSkills();
  }

  getMentorSkills(){
    this.mentorSkills.forEach((m)=> {
      this.skillArr.push(m.skillName);
    });
    this.skills = this.skillArr.toLocaleString();
  }


}
