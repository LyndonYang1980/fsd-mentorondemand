import { SkillModule } from './skill.module';
import { UserModule } from './user.module';
import { MentorModule } from './mentor.module';

export class TrainingModule {
  constructor(
    public training_id: number,
    public user: UserModule,
    public mentor: MentorModule,
    public skill: SkillModule,
    public status: string,
    public progress: number,
    public rating: number,
    public start_date: Date,
    public end_date: Date,
    public amount_received: number
  ){}
} 