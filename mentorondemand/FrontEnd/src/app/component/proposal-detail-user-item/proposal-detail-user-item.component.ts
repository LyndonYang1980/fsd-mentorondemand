import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/service/userService/user.service';
import { UserModule } from 'src/app/module/user.module';

@Component({
  selector: 'app-proposal-detail-user-item',
  templateUrl: './proposal-detail-user-item.component.html',
  styleUrls: ['./proposal-detail-user-item.component.css']
})
export class ProposalDetailUserItemComponent implements OnInit {

  @Input() showProperty: string;
  @Input() userId: number;
  userData: UserModule;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUser(this.userId).subscribe(
      (data) => {
        this.userData = data;
      }, (err) => {
        console.log("No mentor found by id:" + this.userId.toString);
      }
    )
  }
}
