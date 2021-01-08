import { TrainingModule } from './training.module';
import { ProposalModule } from './proposal.module';

export class SkillModule {
  constructor(public skillId: number,
    public mentorId: number,
    public skillName: string,
    public prerequisites: string,
    public yearsOfExp: number,
    public trainings: TrainingModule[]
  ) { }
}
