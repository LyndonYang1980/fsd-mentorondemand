import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms";
import { UserService } from 'src/app/service/userService/user.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  bsModalRef: BsModalRef;
  role: string = "USER";
  
  constructor(private userService: UserService, private bsModalService: BsModalService, 
              private Route: Router) { }

  ngOnInit(): void {
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

  onSubmit(f: NgForm) {
    this.userService.signUp(f.value)
      .subscribe((data)=>{
        let msg = data.message;
        this.showMsgModal(msg);        
      },(error)=>{
        
      });
  }
}
