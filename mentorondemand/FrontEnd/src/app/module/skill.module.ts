import { TrainingModule } from './training.module';

export class SkillModule {
  constructor(public skillId:number,
              public skillName:string,
              public prerequisites: string,
              public skillDuration:number,
              public trainings: TrainingModule[]
              ){}
  }
  