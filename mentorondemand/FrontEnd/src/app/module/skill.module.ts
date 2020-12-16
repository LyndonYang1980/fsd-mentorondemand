import { TrainingModule } from './training.module';
import { ProposalModule } from './proposal.module';

export class SkillModule {
  constructor(public skillId:number,
              public skillName:string,
              public prerequisites: string,
              public skillDuration:number,
              public proposals: ProposalModule[],
              public trainings: TrainingModule[]
              ){}
  }
  