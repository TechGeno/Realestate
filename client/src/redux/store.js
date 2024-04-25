import { configureStore } from '@reduxjs/toolkit';
// import { skipMiddlewareFunction } from 'mongoose';
// import userSlice from './user/userSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
    reducer:{user: userReducer},
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        //Prevent and Serializ error in our browser console
        serialixableCheck: false,
    }),
});