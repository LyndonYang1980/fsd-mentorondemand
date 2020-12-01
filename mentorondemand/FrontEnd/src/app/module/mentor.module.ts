import { SkillModule } from './skill.module';

export class MentorModule {
  constructor( 
    public mentorId:number,
    public mentorName:string,
    public mentorPassword:string,
    public mentorEmail: string,
    public contactNumber:number,
    public mentorExperience:number,
    public rating: number,
    public active: boolean,
    public skills: SkillModule[]
    )
  { }
}