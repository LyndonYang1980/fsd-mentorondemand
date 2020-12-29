import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { MentorItemComponent } from './component/mentor-search/mentor-item/mentor-item.component';
import { MentorSearchComponent } from './component/mentor-search/mentor-search.component';
import { MentorSignupComponent } from './component/mentor-signup/mentor-signup.component';
import { MentorDashboardComponent } from './component/mentor-dashboard/mentor-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { PaymentComponent } from './component/mentor-dashboard/payment/payment.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mentor', component: MentorSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mentorLogin', component: MentorLoginComponent },
  { path: 'userSignUp', component: SignUpComponent },
  { path: 'mentorSignUp', component: MentorSignupComponent },
  { path: 'userpage', component: UserDashboardComponent },
  { path: 'mentorpage', component: MentorDashboardComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'mentorproposal', component: MentorProposalComponent },
  { path: 'userproposal', component: UserProposalComponent },
  { path: 'mentortraining', component: MentorTrainingsComponent },
  { path: 'usertraining', component: UserTrainingsComponent },
  { path: 'trainingdetail', component: MentorTrainingDetailsComponent }

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
    MentorItemComponent,
    MentorSearchComponent,
    MentorSignupComponent,
    MentorDashboardComponent,
    UserDashboardComponent,
    PaymentComponent,
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
  ],
  imports: [
    NgbModule,
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
