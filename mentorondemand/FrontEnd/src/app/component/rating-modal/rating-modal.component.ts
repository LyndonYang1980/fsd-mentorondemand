import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.css']
})
export class RatingModalComponent implements OnInit {

  form: FormGroup;
  radioArray: FormArray;
  ratingArr = [];
  onSubmit: any;

  radioList = [{ "title": "One Star", "name": "rating", "value": "1" }, 
              { "title": "Two Stars", "name": "rating", "value": "2" },
              { "title": "Three Stars", "name": "rating", "value": "3" }, 
              { "title": "Four Stars", "name": "rating", "value": "4" },
              { "title": "Five Stars", "name": "rating", "value": "5" }];

  constructor(private formBuilder: FormBuilder, private bsModalRef: BsModalRef) {
    this.form = this.formBuilder.group(
      { radioArray: this.formBuilder.array([]) }
    );
  }

  ngOnInit(): void {
  }

  onRadioChange(e: { target: { checked: any; name: any; value: any } }) {
    this.radioArray = this.form.get('radioArray') as FormArray;
    if (e.target.checked) {
      this.radioArray.clear();
      this.radioArray.push(new FormControl(e.target.value));
    }

    this.setBtnAvailable();
  }

  setBtnAvailable() {
    let btnElement = <HTMLInputElement>document.getElementById("submitBtn");
    if (this.radioArray.length <= 0) {
      btnElement.disabled = true;
    } else {
      btnElement.disabled = false;
    }
  }

  getCheckedItems() {
    this.radioArray.controls.forEach((item: FormControl) => {
      if (item.value !== null) {
        this.ratingArr.push(item.value);
      }
    });
  }

  submit() {
    this.getCheckedItems();
    this.onSubmit(this.ratingArr);
    this.bsModalRef.hide();

  }

  cancel() {
    this.bsModalRef.hide();
  }

}
