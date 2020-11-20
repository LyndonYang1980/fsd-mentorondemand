import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MentorLoginComponent } from './component/mentor-login/mentor-login.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { MentorDetailComponent } from './component/mentor-search/mentor-detail/mentor-detail.component';
import { MentorListComponent } from './component/mentor-search/mentor-list/mentor-list.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { MentorItemComponent } from './component/mentor-search/mentor-item/mentor-item.component';
import { MentorSearchComponent } from './component/mentor-search/mentor-search.component';
import { MentorSignupComponent } from './component/mentor-signup/mentor-signup.component';
import { MentorDashboardComponent } from './component/mentor-dashboard/mentor-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { MentorConnectionComponent } from './component/user-dashboard/mentor-connection/mentor-connection.component';
import { ExistingSkillComponent } from './component/mentor-dashboard/mentor-skill/existing-skill/existing-skill.component';
import { NewSkillComponent } from './component/mentor-dashboard/mentor-skill/new-skill/new-skill.component';
import { MentorSkillComponent } from './component/mentor-dashboard/mentor-skill/mentor-skill.component';
import { UserProposalComponent } from './component/mentor-dashboard/user-proposal/user-proposal.component';
import { PaymentComponent } from './component/mentor-dashboard/payment/payment.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'mentor' , component : MentorSearchComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'mentorLogin' , component : MentorLoginComponent},
  { path : 'userSignUp' , component : SignUpComponent},
  { path : 'mentorSignUp' , component : MentorSignupComponent},
  { path : 'userpage' , component : UserDashboardComponent},
  { path : 'mentorpage' , component :MentorDashboardComponent},
  { path : 'skills' , component : MentorSkillComponent},
  { path : 'students' , component : UserProposalComponent},
  { path : 'payments' , component : PaymentComponent},
  { path : 'connections' , component : MentorConnectionComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    MentorLoginComponent,
    HeaderComponent,
    HomeComponent,
    MentorDetailComponent,
    MentorListComponent,
    SearchBarComponent,
    MentorItemComponent,
    MentorSearchComponent,
    MentorSignupComponent,
    MentorDashboardComponent,
    UserDashboardComponent,
    MentorConnectionComponent,
    ExistingSkillComponent,
    NewSkillComponent,
    MentorSkillComponent,
    UserProposalComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
