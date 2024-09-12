import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../App";
import { store } from "../../store";
import { toast } from "react-toastify";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const { filterCharacters, searchCharacter, currentPage } = store.getState();
    const res = await axiosConfig.get(
      `/character/?page=${currentPage}&name=${searchCharacter}&status=${filterCharacters.status}&gender=${filterCharacters.gender}`
    );

    return res.data;
  }
);

const initialState = {
  charactersData: [],
  loading: false,
  error: "",
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
      state.charactersData = [];
      state.error = "";
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.charactersData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.charactersData = [];
      state.error =
        action.error.code === "ERR_BAD_REQUEST" ? "There is nothing here" : "";
      toast.error(state.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  },
});

export default charactersSlice.reducer;
