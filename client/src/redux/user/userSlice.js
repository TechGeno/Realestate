import { creatSlice } from '@reduxjs/toolkit';

const intialState = {
    currentUser: null,
    error: null,
    loadinf: false,
};

const userSlice = creatSlice({
    name: 'user',
    intialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        //reducers for sign in fail and user logout
        signInFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { signInStart, signInSuccess, signInFail } = userSlice.actions;

export default userSlice.reducer;