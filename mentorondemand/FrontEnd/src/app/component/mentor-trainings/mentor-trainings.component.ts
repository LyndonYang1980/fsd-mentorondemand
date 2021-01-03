import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/userService/user.service';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { TrainingService } from 'src/app/service/trainingService/training.service';
import { MentorModule } from 'src/app/module/mentor.module';
import { TrainingModule } from 'src/app/module/training.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-trainings',
  templateUrl: './mentor-trainings.component.html',
  styleUrls: ['./mentor-trainings.component.css']
})
export class MentorTrainingsComponent implements OnInit {

  mentorData: MentorModule;
  mentorTrainingList: TrainingModule[];

  constructor(private skillService: SkillService,
    private trainingService: TrainingService,
    private router: Router) {}

  ngOnInit(): void {
    this.getLoginMentor();
    this.getMentorTrainingData();
  }

  getLoginMentor() {
    this.mentorData = JSON.parse(localStorage.getItem("mentorLoggedIn"));
    console.log("Mentor logged in: " + this.mentorData.mentorName);
  }

  getMentorTrainingData() {
    let mentorId = this.mentorData.mentorId;
    this.trainingService.getMentorTraining(mentorId).subscribe((data) => {
      this.mentorTrainingList = data.sort((n1, n2) => n1.trainingId - n2.trainingId);
      console.log("Find Mentor Trainings");
    }, (error) => {
      console.log(error);
    })
  }

  viewTrainingDetail(trainingId: number) {
    this.router.navigate(['mentortrainingdetails'], {
      queryParams: {
        trainingId: trainingId
      }
    });
  }

}
