import { TrainingModule } from './training.module';
import { ProposalModule } from './proposal.module';

export class UserModule {
  constructor(
    public userId: number,
    public userName: string,
    public userEmail: string,
    public userBirthday: Date,
    public contactNumber:number,
    public userPassword:string,
    public status:string,
    public proposals: ProposalModule[],
    public trainings: TrainingModule[]
  ){}
} 