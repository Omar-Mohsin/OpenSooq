import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./auth/authSlice";
import { postsReducer } from "./posts/postsSlice";
const rootReducers = combineReducers({

    auth: authReducer,
    posts :  postsReducer,

})


export const store = configureStore({
    reducer: rootReducers,

});