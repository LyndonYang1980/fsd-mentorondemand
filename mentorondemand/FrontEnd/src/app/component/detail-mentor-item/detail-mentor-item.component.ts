import { Component, OnInit, Input } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';
import { MentorService } from 'src/app/service/mentorService/mentor.service';

@Component({
  selector: 'app-detail-mentor-item',
  templateUrl: './detail-mentor-item.component.html',
  styleUrls: ['./detail-mentor-item.component.css']
})
export class DetailMentorItemComponent implements OnInit {
  
  @Input() showProperty: string;
  @Input() mentorId: number;
  mentorData: MentorModule

  constructor(private mentorService: MentorService) { }

  ngOnInit(): void {
    this.getMentorData();
  }

  getMentorData() {
    this.mentorService.getMentor(this.mentorId).subscribe(
      (data) => {
        this.mentorData = data;
      }, (err) => {
        console.log("No mentor found by id:" + this.mentorId.toString);
      }
    )
  }

}
