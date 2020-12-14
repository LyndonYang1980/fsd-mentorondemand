import { TrainingModule } from './training.module';

export class UserModule {
  constructor(
    public userId: number,
    public userName: string,
    public userEmail: string,
    public userBirthday: Date,
    public contactNumber:number,
    public userPassword:string,
    public status:string,
    public trainings: TrainingModule[]
  ){}
} 