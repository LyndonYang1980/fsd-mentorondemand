import { Injectable } from '@angular/core';
import { TrainingModule } from 'src/app/module/training.module';
import { UserModule } from 'src/app/module/user.module';

@Injectable({
  providedIn: 'root'
})
export class TrainingConfigService {

  constructor() { }

  private trainingAPIUrl = "http://localhost/feign/trainings";

  addTrainingUrl() {
    return this.trainingAPIUrl;
  }

  getTrainingsUrl() {
    return this.trainingAPIUrl;
  }

  getTrainingUrl(trainingId: number) {
    return this.trainingAPIUrl + "/" + trainingId;
  }

  findExistingTrainingUrl() {
    return this.trainingAPIUrl + "/existingTraining";
  }

  updTrainingUrl() {
    return this.trainingAPIUrl;
  }

  getUserTrainingUrl(userId: number) {
    return this.trainingAPIUrl + "/user/" + userId;
  }

  getMentorTrainingUrl(mentorId: number) {
    return this.trainingAPIUrl + "/mentor/" + mentorId;
  }
}
