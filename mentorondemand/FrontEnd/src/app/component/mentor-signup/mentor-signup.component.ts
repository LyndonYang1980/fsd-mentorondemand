import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/service/mentorService/mentor.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { SkillModule } from 'src/app/module/skill.module';
import { observable } from 'rxjs';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {

  bsModalRef: BsModalRef;
  skillList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};
  role:string = "MENTOR";

  constructor(private mentorService: MentorService, private skillService: SkillService,
    private bsModalService: BsModalService, private Route: Router) { }

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

  showMsgModal(msg: string) {

    const initialState = {
      title: 'Information',
      msg: msg
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      this.Route.navigate(['login']);
    }
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
    this.mentorService.signUp(f.value)
      .subscribe((data) => {
        let msg = data.message;
        this.showMsgModal(msg); 
        this.Route.navigate(['mentorLogin'])
      }, (error) => {
        console.log(error);
      })
  }
}
