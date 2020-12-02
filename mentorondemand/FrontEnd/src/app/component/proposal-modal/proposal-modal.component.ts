import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SkillModule } from 'src/app/module/skill.module';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-proposal-modal',
  templateUrl: './proposal-modal.component.html',
  styleUrls: ['./proposal-modal.component.css']
})
export class ProposalModalComponent implements OnInit {

  title: string;
  mentorSkills: SkillModule[];
  skills: string;
  skillArr = [];
  isCancel: boolean;
  onConfirm: any;
  form: FormGroup;

  constructor(private fb: FormBuilder, private bsModalRef: BsModalRef) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
    console.log("BsModalRef content: " + this.bsModalRef.content);
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.mentorSkills.forEach((m) => {
      this.skillArr.push(m.skillName);
    });
    this.skills = this.skillArr.toLocaleString();
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value)
  }

  confirm() {
    // this.isCancel = false;
    this.onConfirm(this.skills);
    this.bsModalRef.hide();
  }

  cancel() {
    this.bsModalRef.hide();
  }

}
