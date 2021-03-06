import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HighlightDirective } from './highlight.directive';
import { TimeCountPipe } from './time-count.pipe';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepoProfileComponent } from './repo-profile/repo-profile.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { HomeComponent } from './home/home.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { DateCountPipe } from './date-count.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './Not-found/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HighlightDirective,
    TimeCountPipe,
    // UserProfileComponent,
    RepoProfileComponent,
    HomeComponent,
    SearchFormComponent,
    DateCountPipe,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
