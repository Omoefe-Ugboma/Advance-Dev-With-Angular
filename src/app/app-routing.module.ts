import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'posts',
    component: PostsListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule { }
