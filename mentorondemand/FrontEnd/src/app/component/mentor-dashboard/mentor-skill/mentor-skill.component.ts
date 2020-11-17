import { Component, OnInit } from '@angular/core';
import { SkillModule } from 'src/app/module/skill.module';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/service/skillService/skill.service';

@Component({
  selector: 'app-mentor-skill',
  templateUrl: './mentor-skill.component.html',
  styleUrls: ['./mentor-skill.component.css']
})
export class MentorSkillComponent implements OnInit {
  
  mentorSkillList: SkillModule[];

  constructor(private skillService:SkillService,
              private routes:Router) { }

  ngOnInit() {
    this.getSkillList();
  }
  
  getSkillList(){
    this.skillService.getMentorSkills()
      .subscribe((data)=>{
        // @ts-ignore
        this.mentorSkillList = data;
        this.routes.navigate(['skills'])
      },(error)=>{
        console.log("No skill found")
      });
  }
}
