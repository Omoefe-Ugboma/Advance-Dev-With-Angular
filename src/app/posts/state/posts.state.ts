// import { PostsState } from './posts.state';
import { Post } from './../../models/posts.model';

export interface PostsState{
    posts: Post[];
}

export const initialState: PostsState = {
    posts:[
        {id:'1', title:'The old wood', description:'Life teaching for mothers'},
        {id:'2', title:'The music city', description:'The sound of music is everywhere!'}
    ]
}