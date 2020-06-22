import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HighlightDirective } from './highlight.directive';
import { TimeCountPipe } from './time-count.pipe';
import { UserComponent } from './User-profile/user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepoProfileComponent } from './repo-profile/repo-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HighlightDirective,
    TimeCountPipe,
    UserComponent,
    UserProfileComponent,
    RepoProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
