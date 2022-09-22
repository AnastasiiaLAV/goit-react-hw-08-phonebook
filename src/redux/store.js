import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import contactsSlice from "./contacts/contacts-slice";
import filterSlice from "./filter/filter-slice";

const rootReducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice,
    auth: authSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})

