import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MentorLoginComponent } from './component/mentor-login/mentor-login.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { MentorListComponent } from './component/mentor-search/mentor-list/mentor-list.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { MentorSearchComponent } from './component/mentor-search/mentor-search.component';
import { MentorSignupComponent } from './component/mentor-signup/mentor-signup.component';
import { MentorProfileComponent } from './component/mentor-profile/mentor-profile.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MentorSkillsComponent } from './component/mentor-search/mentor-skills/mentor-skills.component';
import { ProposalUserBtnComponent } from './component/proposal-user-btn/proposal-user-btn.component';
import { ProposalModalComponent } from './component/proposal-modal/proposal-modal.component';
import { MessageModalComponent } from './component/message-modal/message-modal.component';
import { MentorProposalComponent } from './component/mentor-proposal/mentor-proposal.component';
import { DetailUserItemComponent } from './component/detail-user-item/detail-user-item.component';
import { DetailSkillItemComponent } from './component/detail-skill-item/detail-skill-item.component';
import { ProposalMentorBtnComponent } from './component/proposal-mentor-btn/proposal-mentor-btn.component';
import { UserProposalComponent } from './component/user-proposal/user-proposal.component';
import { DetailMentorItemComponent } from './component/detail-mentor-item/detail-mentor-item.component';
import { ProposalUserConfirmBtnComponent } from './component/proposal-user-confirm-btn/proposal-user-confirm-btn.component';
import { TrainingDetailModalComponent } from './component/training-detail-modal/training-detail-modal.component';
import { MentorTrainingsComponent } from './component/mentor-trainings/mentor-trainings.component';
import { UserTrainingsComponent } from './component/user-trainings/user-trainings.component';
import { MentorTrainingDetailsComponent } from './component/mentor-training-details/mentor-training-details.component';
import { UserTrainingDetailsComponent } from './component/user-training-details/user-training-details.component';
import { MessageOkcancelModalComponent } from './component/message-okcancel-modal/message-okcancel-modal.component';
import { MentorCalendarsComponent } from './component/mentor-calendars/mentor-calendars.component';
import { MentorCalendarDetailsComponent } from './component/mentor-calendar-details/mentor-calendar-details.component';
import { MentorNewCalendarComponent } from './component/mentor-new-calendar/mentor-new-calendar.component';
import { MentorSkillsetComponent } from './component/mentor-skillset/mentor-skillset.component';
import { MentorSkillDetailsComponent } from './component/mentor-skill-details/mentor-skill-details.component';
import { MentorNewSkillComponent } from './component/mentor-new-skill/mentor-new-skill.component';
import { SkillMentorBtnComponent } from './component/skill-mentor-btn/skill-mentor-btn.component';
import { CalendarMentorBtnComponent } from './component/calendar-mentor-btn/calendar-mentor-btn.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { MentorDetailsModalComponent } from './component/mentor-details-modal/mentor-details-modal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mentor', component: MentorSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mentorLogin', component: MentorLoginComponent },
  { path: 'userSignUp', component: SignUpComponent },
  { path: 'mentorSignUp', component: MentorSignupComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  { path: 'userProfile', component: UserProfileComponent},
  { path: 'mentorProfile', component: MentorProfileComponent },
  { path: 'mentorproposal', component: MentorProposalComponent },
  { path: 'userproposal', component: UserProposalComponent },
  { path: 'mentortraining', component: MentorTrainingsComponent },
  { path: 'usertraining', component: UserTrainingsComponent },
  { path: 'mentortrainingdetails', component: MentorTrainingDetailsComponent },
  { path: 'usertrainingdetails', component: UserTrainingDetailsComponent },
  { path: 'mentorcalendars', component: MentorCalendarsComponent },
  { path: 'mentorcalendardetails', component: MentorCalendarDetailsComponent },
  { path: 'mentornewcalendar', component: MentorNewCalendarComponent },
  { path: 'mentorskillset', component: MentorSkillsetComponent },
  { path: 'mentorskilldetails', component: MentorSkillDetailsComponent },
  { path: 'mentornewskill', component: MentorNewSkillComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    MentorLoginComponent,
    HeaderComponent,
    HomeComponent,
    MentorListComponent,
    SearchBarComponent,
    MentorSearchComponent,
    MentorSignupComponent,
    MentorProfileComponent,
    UserDashboardComponent,
    MentorSkillsComponent,
    ProposalUserBtnComponent,
    ProposalModalComponent,
    MessageModalComponent,
    MentorProposalComponent,
    DetailUserItemComponent,
    DetailSkillItemComponent,
    ProposalMentorBtnComponent,
    UserProposalComponent,
    DetailMentorItemComponent,
    ProposalUserConfirmBtnComponent,
    TrainingDetailModalComponent,
    MentorTrainingsComponent,
    UserTrainingsComponent,
    MentorTrainingDetailsComponent,
    UserTrainingDetailsComponent,
    MessageOkcancelModalComponent,
    MentorCalendarsComponent,
    MentorCalendarDetailsComponent,
    MentorNewCalendarComponent,
    MentorSkillsetComponent,
    MentorSkillDetailsComponent,
    MentorNewSkillComponent,
    SkillMentorBtnComponent,
    CalendarMentorBtnComponent,
    UserProfileComponent,
    MentorDetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    BsModalRef,
    BsDatepickerConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
