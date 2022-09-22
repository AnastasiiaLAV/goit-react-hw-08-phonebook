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

// export const addContacts = createAsyncThunk(
//     "contacts/add",
//     async(data, {rejectWithValue}) =>{
//         try{
//             const result = await api.addContacts(data);
//             return result;
//         }
//         catch(error){
//             return rejectWithValue(error);
//         }
//     },
//     {
//         condition: (data, {getState}) =>{
//             const {contacts} = getState();
//             if(doubleСontacts(data, contacts.items)){
//                 Notify.warning(`${data.name.toUpperCase()} contact already exists`);
//                 return false;
//             }
//         }
//     }
// );

// export const removeContacts = createAsyncThunk(
//     "contacts/remove",
//     async(id, {rejectWithValue}) =>{
//         try{
//             await api.removeContacts(id);
//             return id;
//         }
//         catch(error){
//             return rejectWithValue(error);
//         }
//     }
// );


