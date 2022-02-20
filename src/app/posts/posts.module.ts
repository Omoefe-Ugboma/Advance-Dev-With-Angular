import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path:'',
        component: PostsListComponent,
        children:[
          {path: 'add', component:AddPostComponent},
          {path: 'edit/:id', component:EditPostComponent}
        ]
      } 
];  
@NgModule({
    declarations:[
        PostsListComponent,
        AddPostComponent,
        EditPostComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})

export class PostsModule{}