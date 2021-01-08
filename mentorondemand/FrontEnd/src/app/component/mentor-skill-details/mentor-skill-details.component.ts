import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SkillModule } from 'src/app/module/skill.module';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-mentor-skill-details',
  templateUrl: './mentor-skill-details.component.html',
  styleUrls: ['./mentor-skill-details.component.css']
})
export class MentorSkillDetailsComponent implements OnInit {

  skillForm: FormGroup;
  skillId: number;
  skillData: SkillModule;
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
    },

    'prerequisites': {
      'required': 'Please input pre-requisites',
    },

    'yearsOfExp': {
      'required': 'Please input years of experience',
    }
  };

  constructor(private formBuilder: FormBuilder, private skillService: SkillService,
    private activeRouter: ActivatedRoute, private router: Router,
    private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.getParams();
  }

  buildForm() {

    this.skillForm = this.formBuilder.group(
      {
        skillId: [{ value: this.skillData.skillId, disabled: true }],
        skillName: [{ value: this.skillData.skillName, disabled: true }],
        prerequisites: [{ value: this.skillData.prerequisites, disabled: true }, Validators.required],
        yearsOfExp: [{ value: this.skillData.yearsOfExp, disabled: true }, Validators.required]
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

  onEdit() {
    this.skillForm.get('skillName').enable({ emitEvent: false });
    this.skillForm.get('prerequisites').enable({ emitEvent: false });
    this.skillForm.get('yearsOfExp').enable({ emitEvent: false });
    this.editMode = true;
  }

  genSkillObj(): SkillModule {
    let sId: number = this.skillData.skillId;
    let mId: number = this.skillData.mentorId;
    let skillName: string = this.skillForm.get('skillName').value;
    let prerequisites: string = this.skillForm.get('prerequisites').value;
    let yearsOfExp: number = this.skillForm.controls['yearsOfExp'].value;

    let retSkill: SkillModule = new SkillModule(sId, mId, skillName, prerequisites, yearsOfExp, null);
    return retSkill;
  }

  onSubmit() {
    let updSkill: SkillModule = this.genSkillObj();

    this.skillService.findExistingSkills(updSkill).subscribe(
      (result) => {
        if (result == true) {
          this.msg = "The skill already exists";
          this.showMsgModal(this.msg, null);
        } else {
          this.skillService.updateSkill(updSkill).subscribe(
            (skillData) => {
              if (skillData != null) {
                this.msg = "Skill updated successfully";
              } else {
                this.msg = "Skill failed to update";
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

  getParams() {
    this.activeRouter.queryParams.subscribe(
      (params) => {
        this.skillId = params.skillId;
        this.getSkill(this.skillId);
      })
  }

  getSkill(skillId: number) {
    this.skillService.getSkill(skillId).subscribe((skill) => {
      this.skillData = skill;
      this.buildForm();
    }
    )
  }
}
