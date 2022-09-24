import * as apiAuth from "helper/apiAuth";
// import { Notify } from "notiflix";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const singupUser = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try{
            const result = await apiAuth.signup(data);
            return result;
        } catch({response}){
            const {status, data} = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async(data, {rejectWithValue}) => {
        try{
            const result = await apiAuth.login(data);
            return result;
        } catch({response}){
            const {status, data} = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try{
            const result = await apiAuth.logout();
            return result;
        } catch({response}){
            const {status, data} = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const currentUser = createAsyncThunk(
    "auth/current",
    async(_, {rejectWithValue, getState}) => {
        try{
            const {auth} = getState()
            const result = await apiAuth.current(auth.token);
            return result;
        } catch({response}){
            const {status, data} = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
);


