import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../App";
import { store } from "../../store";

export const fetchSelectedCharacter = createAsyncThunk(
  "selectedCharacterInfo/fetchSelectedCharacter",
  async (_, { rejectWithValue }) => {
    const { selectedId } = store.getState();
    try {
      const characterRequest = await axiosConfig.get(
        `/character/${selectedId}`
      );
      const res = await characterRequest.data;
      return res;
    } catch (error) {
      rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  characterData: [],
  loading: false,
  error: "",
};

export const selectedCharacterInfoSlice = createSlice({
  name: "selectedCharacterInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedCharacter.pending, (state) => {
      state.loading = true;
      state.characterData = [];
      state.error = "";
    });
    builder.addCase(fetchSelectedCharacter.fulfilled, (state, action) => {
      state.loading = false;
      state.characterData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSelectedCharacter.rejected, (state, action) => {
      state.loading = false;
      state.characterData = [];
      state.error = action.payload;
    });
  },
});

export default selectedCharacterInfoSlice.reducer;
