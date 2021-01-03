import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MentorModule } from 'src/app/module/mentor.module';
import { MentorService } from 'src/app/service/mentorService/mentor.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;
  searchKey: string;
  @Output() searchResults = new EventEmitter<MentorModule[]>();
  
  constructor(private formBuilder: FormBuilder, private mentorService: MentorService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.searchForm = this.formBuilder.group(
      {
        searchKey: ['']
      }
    );

  }

  onSubmit() {
    let key: string = this.searchForm.get('searchKey').value;
    this.mentorService.searchMentorByKey(key).subscribe(
      (data)=>{
        this.searchResults.emit(data);
      }
    );
  }
}
