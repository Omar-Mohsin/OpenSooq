import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { authReducer } from "./auth/authSlice";
import { postsReducer } from "./posts/postsSlice";


const rootReducers = combineReducers({

    auth: authReducer,
    posts: postsReducer,

})


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,

};

const persistedReducer = persistReducer(persistConfig, rootReducers);


export const store = configureStore({
    reducer: persistedReducer,

});

export const persistor = persistStore(store);
