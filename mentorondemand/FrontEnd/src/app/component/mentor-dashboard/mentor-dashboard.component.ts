import { Component, OnInit } from '@angular/core';
import { MentorConfigService } from 'src/app/config/mentor/mentor-config.service';
import { MentorService } from 'src/app/service/mentorService/mentor.service';
import { Router } from '@angular/router';
import { MentorModule } from 'src/app/module/mentor.module';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SkillService } from 'src/app/service/skillService/skill.service';

@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.css']
})
export class MentorDashboardComponent implements OnInit {

  mentorData: MentorModule;
  mentorSkillList = [];
  skillList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(private mentorConfig:MentorConfigService,
              private mentorService:MentorService,
              private skillService:SkillService,
              private router:Router) { }

  ngOnInit(): void {
    this.getMentorDetail();
    this.getMentorSkills();
    this.getSkills();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'skillId',
      textField: 'skillName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: false
    };
  }

  getMentorDetail(){
    this.mentorData = JSON.parse(localStorage.getItem("mentorLoggedIn"));
    console.log("Mentor logged in: " + this.mentorData.mentorName);
  }

  getSkills() {    
    this.skillService.getSkills().subscribe((data) => {
      console.log("Retrieved skill list: " + data);
      this.skillList = data;
    })
  }

  getMentorSkills() {
    this.mentorSkillList = this.mentorData.skills;
    console.log("Mentor skills: " + this.skillList);
  }

  onItemSelect(item: any) {
    this.selectedItems.push(item);
    console.log(item);
  }
  onSelectAll(items: any) {
    this.selectedItems.splice(0, this.selectedItems.length);
    this.selectedItems.push(items);
    console.log(items);
  }

  onSubmit(f: NgForm) {
    this.mentorService.updateMentor(f.value)
      .subscribe(() => {
        console.log("The mentor updated");
        this.router.navigate(['mentorpage'])
      }, (error) => {
        console.log(error);
      })
  }
}
