import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import appConfigReducer from "./appConfigSlice"

export const appStore = configureStore(({
    items: [],
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        appConfig: appConfigReducer
    }
}))