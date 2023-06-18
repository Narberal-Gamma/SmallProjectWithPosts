import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
        fetchPosts(state, action: PayloadAction<IAxiosResponsePost[]>) {
            state.posts = action.payload
        }
    }
})

export const { fetchPosts } = postSlice.actions
export default postSlice.reducer