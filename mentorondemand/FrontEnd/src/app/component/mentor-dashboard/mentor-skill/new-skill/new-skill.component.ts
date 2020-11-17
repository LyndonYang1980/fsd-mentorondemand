import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  materialOptions = [{ id: 'Notes Material', value: 'notesMaterial' },
                     { id: 'Live video session', value: 'liveVideos' },
                     { id: 'Doubt session', value: 'doubtSession' },
                     { id: 'Video Study Material', value: 'videoMaterial' }];
  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.skillService.addSkill(f.value)
      .subscribe((data) => {
        console.log(data + "Skill added succesfully")
      }, (err) => {
        console.log(err)
      });
  }

}
