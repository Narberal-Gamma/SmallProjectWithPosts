import { all } from "redux-saga/effects";
import fetchPostsWatcher from "./postsSaga";

function* rootWatcher(){
    yield all([
        fetchPostsWatcher()
    ])
}

export default rootWatcher