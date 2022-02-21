import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

// type Character = {
//     info: {
//         count: number,
//         pages: number,
//         next: string,
//         prev: boolean
//     };
//     results: [
//         {
//             id: number,
//             name: string,
//             status: string,
//             species: string,
//             type: string,
//             gender: string,
//             origin: {
//                 name: string,
//                 url: string
//             },
//             location: {
//                 name: string,
//                 url: string
//             },
//             image: string,
//             episode: [],
//             url: string,
//             created: string
//         }
//     ];
// };
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

export const {selectAll} = characterAdapter.getSelectors(selectState);

export const selectCharacters = (searchFields: string) =>
    createSelector([selectRootState], (state) => {
        const characters = selectAll(state);

        const filterCharactersSearchFields = characters.filter((e) => {
            return e.name.toLowerCase()?.includes(searchFields.toLowerCase());
        });
        if (searchFields) {
            return filterCharactersSearchFields.map((el) => {
                return {...el};
            });
        }
        return characters.map((el) => {
            return {...el};
        });

    });
export const selectCharacter = (id: number) =>
    createSelector([selectRootState], (state) => {
        const character = selectAll(state);
        return character.filter((item) => item.id === id);
    });

export const getCharacter = createAsyncThunk(`/getCharacter`, async (_, thunkAPI) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character`);
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