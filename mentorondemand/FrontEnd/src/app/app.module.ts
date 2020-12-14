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
import { ProposalBtnComponent } from './component/proposal-btn/proposal-btn.component';
import { ProposalModalComponent } from './component/proposal-modal/proposal-modal.component';
import { MessageModalComponent } from './component/message-modal/message-modal.component';
import { MentorProposalComponent } from './component/mentor-dashboard/mentor-proposal/mentor-proposal.component';



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
  // { path : 'connections' , component : MentorConnectionComponent}

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
    ProposalBtnComponent,
    ProposalModalComponent,
    MessageModalComponent,
    MentorProposalComponent
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
