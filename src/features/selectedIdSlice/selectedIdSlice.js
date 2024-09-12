import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const selectedIdSlice = createSlice({
  name: "selectedId",
  initialState,
  reducers: {
    select: (state, action) => (state = action.payload),
  },
});

export const { select } = selectedIdSlice.actions;

export default selectedIdSlice.reducer;
