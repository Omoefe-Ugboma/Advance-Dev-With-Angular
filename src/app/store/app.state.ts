import { postsReducer } from '../posts/state/posts.reducer';
import { PostsState } from './../posts/state/posts.state';

export interface AppState{
    posts:PostsState;
}

export const appReducer = {
    posts:postsReducer
}