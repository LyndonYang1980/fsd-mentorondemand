import { Component, OnInit } from '@angular/core';
import { MentorConfigService } from 'src/app/config/mentor/mentor-config.service';
import { MentorService } from 'src/app/service/mentorService/mentor.service';
import { Router } from '@angular/router';
import { MentorModule } from 'src/app/module/mentor.module';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SkillService } from 'src/app/service/skillService/skill.service';

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css']
})
export class MentorProfileComponent implements OnInit {

  mentorData: MentorModule;
  mentorSkillList: any
  skillList = [];
  startDate: Date;
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  msg: string = "";

  constructor(private mentorConfig: MentorConfigService,
    private mentorService: MentorService,
    private skillService: SkillService,
    private router: Router) { }

  ngOnInit(): void {
    this.mentorData = this.mentorService.getLoginMentor();
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
      .subscribe((mentorData) => {
        if (mentorData != null) {
          this.msg = "Mentor data updated successfully!"
          localStorage.setItem("mentorLoggedIn", JSON.stringify(mentorData));
        } else {
          this.msg = "Mentor data not updated due to error!"
        }
      }, (error) => {
        this.msg = "Mentor data not updated due to error!"
        location.reload();
      })
  }
}
