import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {character} from "../slice/character";
import {episodes} from "../slice/episodes";

const rootReducer = combineReducers({character, episodes});

const persistedState = localStorage.getItem("perceptionBox")
    ? JSON.parse(localStorage.getItem("perceptionBox")!)
    : {};

export const index = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
});

index.subscribe(() => {
    localStorage.setItem("perceptionBox", JSON.stringify(index.getState()));
});

export type RootState = ReturnType<typeof index.getState>;