import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: [],
    url: string,
    created: string
};
export const characterAdapter = createEntityAdapter<Character>();

const selectState = (state: RootState) => state.character;
const selectRootState = (state: RootState) => state;

export const {selectAll, selectById} = characterAdapter.getSelectors(selectState);

export const selectCharacters = () =>
    createSelector([selectRootState], (state) => {
        return selectAll(state);
    });
export const selectCharacter = (id: number) =>
    createSelector([selectRootState], (state) => {
        return selectById(state, id);
    });

export const getCharacter = createAsyncThunk(`/getCharacter`, async (payload: { name?: string } | undefined, thunkAPI) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?name=${payload ? payload.name : ""}`);
        return await response.json();
    } catch (e) {
        return thunkAPI.rejectWithValue("Failed to load Characters")
    }
});

export const characterSlice = createSlice({
    name: "character",
    initialState: characterAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
        [getCharacter.fulfilled.type]: (state, action) => {
            characterAdapter.setAll(state, action.payload.results);
        },
    },
})
export const character = characterSlice.reducer;