import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import menuToolkit from "./slices/menuToolkitSlice"

const rootReducer = combineReducers(
    {
        menuToolkit:menuToolkit,
    }
)

 const store = configureStore(
    {
        reducer:rootReducer,
    }
)

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;