import { createReducer, on } from "@ngrx/store";
import { addPost, updatePost } from "./posts.actions";
import { initialState, PostsState } from "./posts.state";

const _postsReducer = createReducer(
    initialState,
    on(addPost, (state, action) =>{
        let post = {...action.post};
        
        post.id = (state.posts.length + 1).toString();
        return{
            ...state,
            posts:[...state.posts, post],
        };
    }),
    on(updatePost, (state, action) => {
        const updatePosts =  state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });
        return {
            ...state,
            posts:updatePosts,
        }
    })
    
);

export function postsReducer(state: any, action: any){
 return _postsReducer(state, action); 
}