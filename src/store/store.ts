import { combineReducers, configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import postReducer from './slices/postsSlice'
import rootWatcher from "./saga"

const rootReducer = combineReducers({
    posts: postReducer
})

const sagaMiddleware = createSagaMiddleware()

const setup = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    })
}

export const store = setup()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootWatcher) 