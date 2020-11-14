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

const routes: Routes = [
  { path : '' , component : HomeComponent},
  // { path : 'mentor' , component : MentorSearchComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'mentorLogin' , component : MentorLoginComponent},
  // { path : 'about' , component : AboutComponent},
  { path : 'userSignUp' , component : SignUpComponent},
  // { path : 'mentorSignUp' , component : MentorSignUpComponent},
  // { path : 'userpage' , component : UserDashboardComponent},
  // { path : 'mentorpage' , component :MentorDashboardComponent},
  // { path : 'skills' , component : MentorSkillComponent},
  // { path : 'students' , component : UserProposalComponent},
  // { path : 'payments' , component : PaymentComponent},
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
    MentorDetailComponent,
    MentorListComponent,
    SearchBarComponent
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
