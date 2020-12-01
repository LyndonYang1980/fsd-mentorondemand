import { Component, OnInit } from '@angular/core';
import { MentorModule } from 'src/app/module/mentor.module';
import { MentorService } from 'src/app/service/mentorService/mentor.service';

@Component({
  selector: 'app-mentor-search',
  templateUrl: './mentor-search.component.html',
  styleUrls: ['./mentor-search.component.css']
})
export class MentorSearchComponent implements OnInit {
  mentorData: MentorModule;
  mentorList: MentorModule[];
  
  constructor(private mentorService: MentorService) { }

  ngOnInit() {
    this.getAllMentors();
  }
  selectMentorEvent(mentorData: MentorModule) {
    this.mentorData = mentorData;
  }
  getAllMentors() {
    this.mentorService.getMentors()
      .subscribe((data) => {
        console.log("getting all mentors" + JSON.stringify(data));
        // localStorage.setItem('allMentors', JSON.stringify(data));
        this.mentorList = data;
      }, (error) => {
        console.log(error);
      })
  }
}