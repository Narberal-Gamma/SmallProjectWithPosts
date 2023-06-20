import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import PostService from "../../services/PostService";
import { IPostResponse } from "../../types/Post";
import { FETCH_POSTS, setPostsError, setPostsLoading, setPostsSuccess } from "./slice";
import getErrorType from "../../utils/getErrorType";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* fetchPostsWorker(action: PayloadAction<{limit: number, page: number}>) {
    try {
        yield put(setPostsLoading())
        yield delay(2000)
        const response: IPostResponse = yield call(PostService.getAllPosts, action.payload.limit, action.payload.page)
        yield put(setPostsSuccess(response))
    } catch (e) {
        yield put(setPostsError(getErrorType(e)))
    }
}

function* fetchPostsWatcher() {
    yield takeEvery(FETCH_POSTS, fetchPostsWorker)
}

export default fetchPostsWatcher