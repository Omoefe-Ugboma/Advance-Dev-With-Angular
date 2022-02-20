import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'posts',
    component: PostsListComponent,
    children:[
      {path: 'add', component:AddPostComponent},
      {path: 'edit/:id', component:EditPostComponent}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],

  exports:[RouterModule],
})

export class AppRoutingModule { }
