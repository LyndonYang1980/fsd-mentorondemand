import { SkillModule } from './skill.module';
import { UserModule } from './user.module';
import { MentorModule } from './mentor.module';

export class TrainingModule {
  constructor(
    public trainingId: number,
    public userId: number,
    public mentorId: number,
    public skillId: number,
    public status: string,
    public progress: number,
    public rating: number,
    public startDate: Date,
    public endDate: Date,
    public amountReceived: number
  ) { }
} 