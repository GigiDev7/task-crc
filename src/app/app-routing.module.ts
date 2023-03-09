import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, },
  {path: ':userId', component: SingleUserComponent},
  {path:':userId/posts',component: UserPostsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
