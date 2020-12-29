import { Component, OnInit, Input } from '@angular/core';
import { ProposalService } from 'src/app/service/proposalService/proposal.service';
import { ProposalModule } from 'src/app/module/proposal.module';
import { MentorModule } from 'src/app/module/mentor.module';
import { UserModule } from 'src/app/module/user.module';
import { SkillModule } from 'src/app/module/skill.module';
import { UserService } from 'src/app/service/userService/user.service';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { TrainingService } from 'src/app/service/trainingService/training.service';
import { TrainingModule } from 'src/app/module/training.module';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TrainingDetailModalComponent } from '../training-detail-modal/training-detail-modal.component';

@Component({
  selector: 'app-mentor-proposal',
  templateUrl: './mentor-proposal.component.html',
  styleUrls: ['./mentor-proposal.component.css']
})
export class MentorProposalComponent implements OnInit {

  bsModalRef: BsModalRef;
  mentorData: MentorModule;
  proposalData: ProposalModule;
  mentorProposalList: ProposalModule[];
  skillData: SkillModule;
  userData: UserModule;
  msg: string;

  constructor(private proposalService: ProposalService,
    private userService: UserService,
    private skillService: SkillService,
    private trainingService: TrainingService,
    private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.getLoginMentor();
    this.getMentorProposalData();
  }

  getLoginMentor() {
    this.mentorData = JSON.parse(localStorage.getItem("mentorLoggedIn"));
    console.log("Mentor logged in: " + this.mentorData.mentorName);
  }

  getMentorProposalData() {
    let mentorId = this.mentorData.mentorId;
    this.proposalService.getMentorProposal(mentorId).subscribe((data) => {
      this.mentorProposalList = data.sort((n1, n2) => n1.proposalId - n2.proposalId);
    }, (error) => {
      console.log(error);
    })
  }

  updateLocalProposalList(retProposalData: ProposalModule) {
    let index: number = this.mentorProposalList.findIndex(proposalItem => {
      return proposalItem.proposalId === retProposalData.proposalId;
    });

    if (index > -1) {
      this.mentorProposalList.splice(index, 1, retProposalData);
    }
  }

  showMsgModal(msg: string) {

    const initialState = {
      title: 'Information',
      msg: msg
    };

    // Show message dialog modal
    this.bsModalRef = this.bsModalService.show(MessageModalComponent, { initialState });

    this.bsModalRef.content.onClick = () => {
      location.reload();
    }
  }

  handleRetProposalData(retProposalData: ProposalModule) {

    this.updateLocalProposalList(retProposalData);

    if (retProposalData.mentorProposal == true) {
      let mentorId = this.mentorData.mentorId;
      let userId = retProposalData.userId;
      let skillId = retProposalData.skillId;
      let statusArr = ["proposed", "confirmed proposals"];

      this.userService.getUser(userId).subscribe(
        (userData) => {
          if (userData == null) {
            this.msg = "User won't be added to training because the user no longer existed";
          } else {
            let newTraining: TrainingModule = new TrainingModule(null, userId, mentorId, skillId, null, "proposed", 0, null, null, null, 0);

            this.trainingService.findExistingTraining(newTraining).subscribe(
              (result) => {
                if (result == null) {
                  this.trainingService.addTraining(newTraining).subscribe(
                    (data) => {
                      if (data != null) {
                        this.msg = "New training created for proposal. Go to Training page for updating details"
                      } else {
                        this.msg = "Failed to create new training for the proposal"
                      }
                      this.showMsgModal(this.msg);
                    }
                  )
                } else {
                  this.msg = "Existing same training found for the proposal"
                  this.showMsgModal(this.msg);
                }
              }
            )
          }
        }
      )
    }
  }
}
