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
  checkArray: FormArray;

  constructor(private formBuilder: FormBuilder, private bsModalRef: BsModalRef) {
    this.form = this.formBuilder.group({
      checkArray: this.formBuilder.array([])
    })
    console.log("BsModalRef content: " + this.bsModalRef.content);
  }

  ngOnInit(): void {

  }

  onCheckboxChange(e: { target: { checked: any; value: any; }; }) {

    this.checkArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      this.checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          this.checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }

    this.setBtnAvailable();
  }

  setBtnAvailable(){
    let btnElement = <HTMLInputElement> document.getElementById("submitBtn");
    if (this.checkArray.length <= 0) {
      btnElement.disabled = true;
    }else{
      btnElement.disabled = false;
    }
  }

  getCheckedItems() {
    this.checkArray.controls.forEach((item: FormControl) => {
      if (item.value !== null) {
        this.skillArr.push(item.value);
      }
    });
  }

  submitForm() {
    this.getCheckedItems();
    this.onConfirm(this.skillArr);
    this.bsModalRef.hide();

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
