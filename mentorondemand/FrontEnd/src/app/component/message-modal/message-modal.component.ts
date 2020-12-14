import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {

  title: string;
  msg: string;
  onConfirm:any;

  constructor(private bsModalRef: BsModalRef) { 
    console.log("Message Module: " + this.bsModalRef.content);
  }

  ngOnInit(): void {
  }

  click(){
    this.bsModalRef.hide();
  }
}
