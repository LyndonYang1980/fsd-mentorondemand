import { Component, OnInit, Input } from '@angular/core';
import { SkillModule } from 'src/app/module/skill.module';

@Component({
  selector: 'app-existing-skill',
  templateUrl: './existing-skill.component.html',
  styleUrls: ['./existing-skill.component.css']
})
export class ExistingSkillComponent implements OnInit {

  @Input() mentorSkillData:SkillModule;
  constructor() { }

  ngOnInit(): void {
  }

}
