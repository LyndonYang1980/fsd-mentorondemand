import { Component, OnInit, Input } from '@angular/core';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { SkillModule } from 'src/app/module/skill.module';

@Component({
  selector: 'app-detail-skill-item',
  templateUrl: './detail-skill-item.component.html',
  styleUrls: ['./detail-skill-item.component.css']
})
export class DetailSkillItemComponent implements OnInit {

  @Input() showProperty: string;
  @Input() skillId: number;
  skillData: SkillModule;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkillData();
  }

  getSkillData() {
    let skillId: number = this.skillId;
    this.skillService.getSkill(skillId).subscribe(
      (data) => {
        this.skillData = data;
      }, (err) => {
        console.log("No skill found by id:" + skillId.toString);
      }
    )
  }
}
