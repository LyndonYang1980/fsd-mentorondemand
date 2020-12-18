import { UserModule } from './user.module';
import { MentorModule } from './mentor.module';
import { SkillModule } from './skill.module';

export class ProposalModule {
  constructor(
    public proposalId:number,
    public userId: number,
    public mentorId: number,
    public skillId: number,
    public userProposal:boolean,
    public mentorProposal:boolean,
    public userReconfirmProposal:boolean
  ){}
}
