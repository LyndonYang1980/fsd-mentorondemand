import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SkillModule } from 'src/app/module/skill.module';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { MentorModule } from 'src/app/module/mentor.module';
import { MentorService } from 'src/app/service/mentorService/mentor.service';

@Component({
  selector: 'app-mentor-new-skill',
  templateUrl: './mentor-new-skill.component.html',
  styleUrls: ['./mentor-new-skill.component.css']
})
export class MentorNewSkillComponent implements OnInit {

  skillForm: FormGroup;
  skillData: SkillModule;
  skillList: SkillModule[];
  mentorData: MentorModule;
  bsModalRef: BsModalRef;
  editMode: boolean = false;
  title: string;
  msg: string;

  formErrors = {
    skillName: '',
    prerequisites: '',
    yearsOfExp: '',
  };

  validationMessage = {
    'skillName': {
      'required': 'Please input skill name',
      'duplicate': 'The skill is already existing'
    },

    'prerequisites': {
      'required': 'Please input pre-requisites',
    },

    'yearsOfExp': {
      'required': 'Please input years of experience',
    }
  };

  constructor(private formBuilder: FormBuilder, private skillService: SkillService,
    private mentorService: MentorService, private activeRouter: ActivatedRoute,
    private router: Router, private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.mentorData = this.mentorService.getLoginMentor();
    // this.getParams();
    this.buildForm();
  }

  buildForm() {

    this.skillForm = this.formBuilder.group(
      {
        skillId: [{ value: (this.skillData == null) ? '' : this.skillData.skillId, disabled: false }],
        mentorId: [{ value: (this.skillData == null) ? '' : this.skillData.mentorId, disabled: false }],
        skillName: [{ value: (this.skillData == null) ? '' : this.skillData.skillName, disabled: false }, Validators.required],
        prerequisites: [{ value: (this.skillData == null) ? '' : this.skillData.prerequisites, disabled: false }, Validators.required],
        yearsOfExp: [{ value: (this.skillData == null) ? '' : this.skillData.yearsOfExp, disabled: false }, Validators.required]
      }
    );

    this.skillForm.valueChanges.subscribe(
      data => this.onValueChange(data)
    );
  }

  onValueChange(data?: any) {

    if (!this.skillForm) { return; }
    const fGroup = this.skillForm;

    for (const field in this.formErrors) {
      // Clear current error msg
      this.formErrors[field] = '';
      // Get current form control
      const control = fGroup.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + '\n';
        }
      }
    }
  }

  genSkillObj(): SkillModule {
    let sId: number = null;
    let mId: number = this.mentorData.mentorId;
    let skillName: string = this.skillForm.get('skillName').value;
    let prerequisites: string = this.skillForm.get('prerequisites').value;
    let yearsOfExp: number = this.skillForm.controls['yearsOfExp'].value;

    let retSkill: SkillModule = new SkillModule(sId, mId, skillName, prerequisites, yearsOfExp, null);
    return retSkill;
  }

  onSubmit() {
    this.skillData = this.genSkillObj();

    this.skillService.findExistingskills(this.skillData.skillName, this.skillData.mentorId).subscribe(
      (result) => {
        if (result == true) {
          this.msg = "The skill already exists";
          this.showMsgModal(this.msg, null);
        } else {
          this.skillService.addSkill(this.skillData).subscribe(
            (skillData) => {
              if (skillData != null) {
                this.msg = "Skill successfully added";             
              } else {
                this.msg = "Skill failed to add due to error";
              }
              this.showMsgModal(this.msg, 'mentorskillset');
            }
          )
        }
      }
    )
  }

  showMsgModal(msg: string, nextPage: string) {

    const initialState = {
      title: 'Information',
      msg: msg
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      if (nextPage != null) {
        this.router.navigate([nextPage]);
      }
    }
  }
}
