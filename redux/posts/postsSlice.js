import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


 const postsSlice = createSlice({
    name : 'posts', 
    initialState , 
    reducers :  {

        addPost :  { 
             reducer  (state , action){
                state.push(action.payload);
             }
        }
    }
});



export const postsReducer = postsSlice.reducer;


export const SelectPosts  = (state)=>{
  return state.posts;
}

export const { addPost } = postsSlice.actions;


