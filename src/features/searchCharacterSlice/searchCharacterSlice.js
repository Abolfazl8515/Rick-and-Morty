import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const searchCharacterSlice = createSlice({
  name: "searchCharacter",
  initialState,
  reducers: {
    searchCharacter: (state, action) => (state = action.payload),
  },
});

export const { searchCharacter } = searchCharacterSlice.actions;

export default searchCharacterSlice.reducer;
