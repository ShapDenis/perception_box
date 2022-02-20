import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

type Episodes = {
    id: number,
    name: string,
    air_date: string,
    episode:[string],
    url: string,
    created: string
};
export const episodesAdapter = createEntityAdapter<Episodes>();

const selectState = (state: RootState) => state.episodes;
const selectRootState = (state: RootState) => state;

export const { selectAll } = episodesAdapter.getSelectors(selectState);

export const selectEpisodes = () =>
    createSelector([selectRootState], (state) => {
        return selectAll(state);
    });

export const getEpisodes = createAsyncThunk(`/getEpisode`, async (_,thunkAPI) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode`);
        return await response.json();
    }catch (e) {
        return thunkAPI.rejectWithValue("Failed to load Episode")
    }
});

export const characterSlice = createSlice({
    name: "episodes",
    initialState: episodesAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
        [getEpisodes.fulfilled.type]: (state, action) => {
            episodesAdapter.setAll(state, action.payload);
        },
    },
})
export const episodes = characterSlice.reducer;