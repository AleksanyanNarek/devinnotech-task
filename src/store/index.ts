import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import modalSlice from "./modalSlice";

const reducer = combineReducers({
    weather: weatherSlice,
    modal: modalSlice,
})

export const store = configureStore({
    reducer
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>