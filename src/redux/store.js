import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import authSlice from "./auth/auth-slice";
import contactsSlice from "./contacts/contacts-slice";
import filterSlice from "./filter/filter-slice";


const persistConfig = {
    key: "token",
    storage,
    whitelist: ["token"]
}

const persistedReducer = persistReducer(persistConfig, authSlice)

const rootReducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice,
    auth: persistedReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
