import { all } from "redux-saga/effects";
import fetchPostsWatcher from "./post/saga";

function* rootWatcher(){
    yield all([
        fetchPostsWatcher()
    ])
}

export default rootWatcher