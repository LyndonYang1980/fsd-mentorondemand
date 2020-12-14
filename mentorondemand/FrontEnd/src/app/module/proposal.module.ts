import { UserModule } from './user.module';
import { MentorModule } from './mentor.module';
import { SkillModule } from './skill.module';

export class ProposalModule {
  constructor(
    public proposal_id:number,
    public user: UserModule,
    public mentor: MentorModule,
    public skill: SkillModule,
    public userProposal:boolean,
    public mentorProposal:boolean,
    public userReconfirmProposal:boolean
  ){}
}
