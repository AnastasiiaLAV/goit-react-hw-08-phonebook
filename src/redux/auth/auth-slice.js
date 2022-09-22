import { createSlice } from "@reduxjs/toolkit";
import { singupUser } from "./auth-operations";


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

        // [singupUser.pending]: (store) => {
        //     store.loading = true;
        //     store.error = null;
        // },
        // [singupUser.fulfilled]: (store, {payload}) => {
        //     store.loading = false;
        //     store.uesr = payload.user;
        //     store.token = payload.token;
        //     store.isLogin = true;
        // },
        // [singupUser.rejected]: (store, {payload}) => {
        //     store.loading = false;
        //     store.error = payload;
        // },
        
    }
});

export default authSlice.reducer;