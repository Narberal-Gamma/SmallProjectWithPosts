import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { IAxiosResponsePost, IPostResponse } from "../../types/Post";

interface IInitialState {
    posts: IAxiosResponsePost[],
    total_count: number,
    isLoading: boolean,
    isError: null | string,
}

const initialState: IInitialState = {
    posts: [],
    isLoading: false,
    isError: '',
    total_count: 0
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPostsLoading(state) {
            state.isLoading = true
            state.total_count = 0
        },
        setPostsSuccess(state, action: PayloadAction<IPostResponse>) {
            state.isLoading = false
            state.isError = ''
            state.posts = action.payload.data
            state.total_count = action.payload.total_count
        },
        setPostsError(state, action: PayloadAction<null | string>) {
            state.isLoading = false
            state.isError = action.payload
            state.posts = []
            state.total_count = 0
        }
    }
})

// Creating Async Action Creators
export const FETCH_POSTS = "posts/asyncFetchPosts"
export const asyncFetchPosts = createAction<{limit: number, page: number}>(FETCH_POSTS)

// Export Slice reducer and actions
export const { setPostsLoading, setPostsSuccess, setPostsError } = postSlice.actions
export default postSlice.reducer