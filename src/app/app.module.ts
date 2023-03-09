import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './single-user/single-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';
import { InfoWrapperComponent } from './info-wrapper/info-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleUserComponent,
    HomePageComponent,
    UserPostsPageComponent,
    InfoWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
