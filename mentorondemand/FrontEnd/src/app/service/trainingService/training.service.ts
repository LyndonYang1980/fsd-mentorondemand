import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TrainingConfigService } from 'src/app/config/training/training-config.service';
import { Observable } from 'rxjs';
import { TrainingModule } from 'src/app/module/training.module';
import { UserModule } from 'src/app/module/user.module';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient: HttpClient,
    private trainingConfig: TrainingConfigService) { }

  addTraining(training: TrainingModule): Observable<TrainingModule> {
    return this.httpClient.post<TrainingModule>(this.trainingConfig.addTrainingUrl(), training, httpOptions);
  }

  getTrainings(): Observable<TrainingModule[]> {
    return this.httpClient.get<TrainingModule[]>(this.trainingConfig.getTrainingsUrl(), httpOptions);
  }

  getTraining(trainingId: number): Observable<TrainingModule> {
    return this.httpClient.get<TrainingModule>(this.trainingConfig.getTrainingUrl(trainingId), httpOptions);
  }

  findExistingTraining(training: TrainingModule): Observable<TrainingModule[]> {
    return this.httpClient.post<TrainingModule[]>(this.trainingConfig.findExistingTrainingUrl(), training, httpOptions);
  }


  getMentorTraining(mentorId: number): Observable<TrainingModule[]> {
    return this.httpClient.get<TrainingModule[]>(this.trainingConfig.getMentorTrainingUrl(mentorId), httpOptions);
  }

  getUserTraining(userId: number): Observable<TrainingModule> {
    return this.httpClient.get<TrainingModule>(this.trainingConfig.getUserTrainingUrl(userId), httpOptions);
  }

}
