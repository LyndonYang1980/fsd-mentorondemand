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
    // this.getAllMentors();
  }
  selectMentorEvent(mentorData: MentorModule) {
    this.mentorData = mentorData;
  }
  getAllMentors() {
    this.mentorService.getMentors()
      .subscribe((data) => {
        this.mentorList = data;
      }, (error) => {
        console.log(error);
      })
  }

  handleSearchResults(results: MentorModule[]){
    this.mentorList = results;
    console.log("handleSearch");
  }
}
