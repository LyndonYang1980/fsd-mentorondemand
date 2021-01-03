import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-message-okcancel-modal',
  templateUrl: './message-okcancel-modal.component.html',
  styleUrls: ['./message-okcancel-modal.component.css']
})
export class MessageOkcancelModalComponent implements OnInit {

  title: string;
  msg: string;
  onClick:any;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  click(){
    this.bsModalRef.hide();
    this.onClick("");
  }

  cancel() {
    this.bsModalRef.hide();
  }

}
