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
import { MentorItemComponent } from './component/mentor-search/mentor-item/mentor-item.component';
import { MentorSearchComponent } from './component/mentor-search/mentor-search.component';
import { MentorSignupComponent } from './component/mentor-signup/mentor-signup.component';
import { MentorDashboardComponent } from './component/mentor-dashboard/mentor-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { PaymentComponent } from './component/mentor-dashboard/payment/payment.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MentorSkillsComponent } from './component/mentor-search/mentor-skills/mentor-skills.component';
import { ProposalUserBtnComponent } from './component/proposal-user-btn/proposal-user-btn.component';
import { ProposalModalComponent } from './component/proposal-modal/proposal-modal.component';
import { MessageModalComponent } from './component/message-modal/message-modal.component';
import { MentorProposalComponent } from './component/mentor-proposal/mentor-proposal.component';
import { ProposalDetailComponent } from './component/proposal-detail/proposal-detail.component';
import { ProposalDetailUserItemComponent } from './component/proposal-detail-user-item/proposal-detail-user-item.component';
import { ProposalDetailSkillItemComponent } from './component/proposal-detail-skill-item/proposal-detail-skill-item.component';
import { ProposalMentorBtnComponent } from './component/proposal-mentor-btn/proposal-mentor-btn.component';
import { UserProposalComponent } from './component/user-proposal/user-proposal.component';
import { ProposalDetailMentorItemComponent } from './component/proposal-detail-mentor-item/proposal-detail-mentor-item.component';
import { ProposalUserConfirmBtnComponent } from './component/proposal-user-confirm-btn/proposal-user-confirm-btn.component';


const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'mentor' , component : MentorSearchComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'mentorLogin' , component : MentorLoginComponent},
  { path : 'userSignUp' , component : SignUpComponent},
  { path : 'mentorSignUp' , component : MentorSignupComponent},
  { path : 'userpage' , component : UserDashboardComponent},
  { path : 'mentorpage' , component :MentorDashboardComponent},
  { path : 'payments' , component : PaymentComponent},
  { path : 'mentorproposal' , component : MentorProposalComponent},
  { path : 'userproposal' , component : UserProposalComponent}

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
    ProposalDetailComponent,
    ProposalDetailUserItemComponent,
    ProposalDetailSkillItemComponent,
    ProposalMentorBtnComponent,
    UserProposalComponent,
    ProposalDetailMentorItemComponent,
    ProposalUserConfirmBtnComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule,
    ModalModule.forRoot()
  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
