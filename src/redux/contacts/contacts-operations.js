import * as api from "helper/api";
import { Notify } from "notiflix";
import { createAsyncThunk } from "@reduxjs/toolkit";

const doubleСontacts = ({name, number}, contacts) =>{
    const dublicate = contacts.find(item => item.name.toLowerCase() === name.toLowerCase() || item.number === number);
    return Boolean(dublicate);
} 

export const fetchContacts = createAsyncThunk(
    "contacts/fatch",
    async(_, thunkAPI) => {
        try{
            const data = await api.getContacts();
            return data;
        } catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) =>{
        try{
            const result = await api.addContacts(data);
            return result;
        }
        catch(error){
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) =>{
            const {contacts} = getState();
            if(doubleСontacts(data, contacts.items)){
                Notify.warning(`${data.name.toUpperCase()} contact already exists`);
                return false;
            }
        }
    }
);

export const removeContacts = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) =>{
        try{
            await api.removeContacts(id);
            return id;
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
);


