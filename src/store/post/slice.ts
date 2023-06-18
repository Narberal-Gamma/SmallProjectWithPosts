import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { IAxiosResponsePost } from "../../types/Post";

interface IInitialState {
    posts: IAxiosResponsePost[]
}

const initialState: IInitialState = {
    posts: []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<IAxiosResponsePost[]>) {
            state.posts = action.payload
        }
    }
})

// Creating Async Action Creators
export const FETCH_POSTS = "posts/asyncFetchPosts"
export const asyncFetchPosts = createAction(FETCH_POSTS)

// Export Slice reducer and actions
export const { setPosts } = postSlice.actions
export default postSlice.reducer