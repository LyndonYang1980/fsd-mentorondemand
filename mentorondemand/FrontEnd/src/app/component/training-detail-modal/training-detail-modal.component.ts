import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-training-detail-modal',
  templateUrl: './training-detail-modal.component.html',
  styleUrls: ['./training-detail-modal.component.css']
})
export class TrainingDetailModalComponent implements OnInit {

  trainingForm: FormGroup;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();
  title: string;
  onSubmit: any;

  formErrors = {
    fee: '',
    startDate: '',
    endDate: ''
  };

  validationMessage = {
    'fee': {
      'required': 'Please input fee',
    },

    'startDate': {
      'required': 'Please input start date',
    },

    'endDate': {
      'required': 'Please input end date',
    }
  };

  fee: FormControl = new FormControl();
  startDate: FormControl = new FormControl();


  constructor(private formBuilder: FormBuilder, private bsModalRef: BsModalRef) {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.trainingForm = this.formBuilder.group(
      {
        fee: ['100', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      }
    );

    this.trainingForm.valueChanges.subscribe(
      data => this.onValueChange(data)
    );
  }

  onValueChange(data?: any) {

    if (!this.trainingForm) { return; }
    const fGroup = this.trainingForm;

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

  setBtnAvailable() {
    let btnElement = <HTMLInputElement>document.getElementById("submitBtn");
    if (this.fee.value == null || this.startDate.value == null) {
      btnElement.disabled = true;
    } else {
      btnElement.disabled = false;
    }
  }


  submit() {
    
    this.bsModalRef.hide();
  }

  cancel() {
    this.bsModalRef.hide();
  }

}
