import { Component, OnInit } from '@angular/core';
import { TrainingModule } from 'src/app/module/training.module';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { TrainingService } from 'src/app/service/trainingService/training.service';
import { UserModule } from 'src/app/module/user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-trainings',
  templateUrl: './user-trainings.component.html',
  styleUrls: ['./user-trainings.component.css']
})
export class UserTrainingsComponent implements OnInit {

  userData: UserModule;
  userTrainingList: TrainingModule[];

  constructor(private skillService: SkillService,
    private trainingService: TrainingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getLoginUser();
    this.getUserTrainingData();
  }

  getLoginUser() {
    this.userData = JSON.parse(localStorage.getItem('userLoggedIn'));
  }

  getUserTrainingData() {
    let userId = this.userData.userId;
    this.trainingService.getUserTraining(userId).subscribe(
      (data) => {
        this.userTrainingList = data.sort((n1, n2) => n1.trainingId - n2.trainingId);
        console.log("Find Mentor Trainings");
      }, (error) => {
        console.log(error);
      })
  }

  openTrainingDetail(trainingId: number) {
    this.router.navigate(['usertrainingdetails'], {
      queryParams: {
        trainingId: trainingId
      }
    });
  }

}
