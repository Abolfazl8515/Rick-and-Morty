import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    incrementPage: (state) => state + 1,
    decrementPage: (state) => state - 1,
    setPageByAmount: (state, action) => (state = action.payload),
  },
});

export const { incrementPage, decrementPage, setPageByAmount } =
  currentPageSlice.actions;

export default currentPageSlice.reducer;
