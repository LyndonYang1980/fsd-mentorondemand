import { Component, OnInit } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';
import { SkillModule } from 'src/app/module/skill.module';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/service/skillService/skill.service';

@Component({
  selector: 'app-mentor-skillset',
  templateUrl: './mentor-skillset.component.html',
  styleUrls: ['./mentor-skillset.component.css']
})
export class MentorSkillsetComponent implements OnInit {

  mentorData: MentorModule;
  skillList: SkillModule[];
  isMentorLoggedIn: string;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
    this.getLoginMentor();
    this.getMentorSkillData();
  }

  getLoginMentor() {
    this.mentorData = JSON.parse(localStorage.getItem("mentorLoggedIn"));
  }

  getMentorSkillData() {
    this.skillService.getMentorSkills(this.mentorData.mentorId).subscribe(
      (skillList)=>{
        if (skillList != null) {
          this.mentorData.skills = skillList;
          localStorage.setItem("mentorLoggedIn", JSON.stringify(this.mentorData));
        }
        this.skillList = this.mentorData.skills.sort((n1, n2) => n1.skillId - n2.skillId);
      }
    )    
  }

  newSkill() {
    this.router.navigate(['mentornewskill']);
  }

  viewSkill(skillId: number) {
    this.router.navigate(['mentorskilldetails'], {
      queryParams: {
        skillId: skillId
      }
    });
  }

}
