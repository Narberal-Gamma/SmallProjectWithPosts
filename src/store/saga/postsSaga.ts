import { put, takeEvery } from "redux-saga/effects";
import PostService from "../../services/PostService";
import { IAxiosResponsePost } from "../../types/Post";
import { fetchPosts } from "../slices/postsSlice";

function* fetchPostsWorker() {
    const response: IAxiosResponsePost[] = yield PostService.getAllPosts()
    yield put(fetchPosts(response))
}

function* fetchPostsWatcher() {
    takeEvery(fetchPosts, fetchPostsWorker)
}

export default fetchPostsWatcher