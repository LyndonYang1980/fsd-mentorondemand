import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/service/mentorService/mentor.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { SkillModule } from 'src/app/module/skill.module';
import { observable } from 'rxjs';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {

  skillList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(private mentorService: MentorService, private skillService: SkillService,
    private Route: Router) { }

  ngOnInit(): void {
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

  onItemSelect(item: any) {
    this.selectedItems.push(item);
    console.log(item);
  }
  onSelectAll(items: any) {
    this.selectedItems.splice(0, this.selectedItems.length);
    this.selectedItems.push(items);
    console.log(items);
  }

  getSkills() {    
    this.skillService.getSkills().subscribe((data) => {
      console.log("Retrieved skill list: " + data);
      this.skillList = data;
    })
  }

  onSubmit(f: NgForm) {
    this.mentorService.addMentor(f.value)
      .subscribe(() => {
        console.log("mentor Registered");
        this.Route.navigate(['mentorLogin'])
      }, (error) => {
        console.log(error);
      })
  }
}
