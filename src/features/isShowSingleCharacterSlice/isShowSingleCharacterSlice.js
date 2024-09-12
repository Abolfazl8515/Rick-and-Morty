import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const isShowSingleCharacterSlice = createSlice({
  name: "isShowSingleCharacter",
  initialState,
  reducers: {
    isShow: (state, action) => (state = action.payload),
  },
});

export const { isShow } = isShowSingleCharacterSlice.actions;

export default isShowSingleCharacterSlice.reducer;
