import { call, put, takeEvery } from "redux-saga/effects";
import PostService from "../../services/PostService";
import { IAxiosResponsePost } from "../../types/Post";
import { FETCH_POSTS, setPosts } from "./slice";

function* fetchPostsWorker() {
    const response: IAxiosResponsePost[] = yield call(PostService.getAllPosts)
    yield put(setPosts(response))
}

function* fetchPostsWatcher() {
    yield takeEvery(FETCH_POSTS, fetchPostsWorker)
}

export default fetchPostsWatcher