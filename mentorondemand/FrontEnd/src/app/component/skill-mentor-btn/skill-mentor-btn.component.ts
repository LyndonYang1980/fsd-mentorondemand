import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { SkillModule } from 'src/app/module/skill.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-mentor-btn',
  templateUrl: './skill-mentor-btn.component.html',
  styleUrls: ['./skill-mentor-btn.component.css']
})
export class SkillMentorBtnComponent implements OnInit {

  @Input() skillId: number;
  skillData: SkillModule;
  bsModalRef: BsModalRef;
  msg: string;

  constructor(private skillService: SkillService, private bsModalService: BsModalService, 
              private router: Router) { }

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
      // this.retProposalData.emit(this.proposalData);
      location.reload();
    }
  }

  viewSkill() {
    this.router.navigate(['mentorskilldetails'], {
      queryParams: {
        skillId: this.skillId
      }
    });
  }

  deleteSkill(){
    this.skillService.deleteSkill(this.skillId).subscribe(
      (result)=>{
        if (result) {
          this.msg = "Skill deleted successfully!";
        } else {
          this.msg = "Skill not deleted due to error";
        }
        this.showMsgModal(this.msg);
      }
    )
  }

}
