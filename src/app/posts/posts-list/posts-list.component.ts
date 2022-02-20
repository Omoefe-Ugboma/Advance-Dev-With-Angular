import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './../../store/app.state';
import { Post } from './../../models/posts.model';
import { getPosts } from './../state/posts.selector';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  
  posts:Observable<Post[]> | undefined
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }
   
  onDeletePost(id: any){
    if(confirm('Are you sure you want to delete')){
      // console.log('delete the post');
      this.store.dispatch(deletePost({id}));
    }
  }
}
