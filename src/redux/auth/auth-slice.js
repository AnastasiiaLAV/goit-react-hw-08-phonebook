import { createSlice } from "@reduxjs/toolkit";
import { currentUser, loginUser, logoutUser, singupUser } from "./auth-operations";


const initialState = {
    user: {},
    token:"",
    isLogin: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [singupUser.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [singupUser.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.uesr = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [singupUser.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },

        [loginUser.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [loginUser.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.uesr = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [loginUser.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        
        [logoutUser.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logoutUser.fulfilled]: (store) => {
            store.loading = false;
            store.uesr = {};
            store.token = '';
            store.isLogin = false;
        },
        [logoutUser.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },

        [currentUser.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [currentUser.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.uesr = payload;
            store.isLogin = true;
        },
        [currentUser.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
            store.token = "";
        },
    }
});

export default authSlice.reducer;