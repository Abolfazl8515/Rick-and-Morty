import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: "", gender: "" };

export const filterCharacterSlice = createSlice({
  name: "filterCharacters",
  initialState,
  reducers: {
    filterCharacterStatus: (state, action) => {
      state.status = action.payload.value;
    },
    filterCharacterGender: (state, action) => {
      state.gender = action.payload.value;
    },
  },
});

export const { filterCharacterGender, filterCharacterStatus } =
  filterCharacterSlice.actions;

export default filterCharacterSlice.reducer;
