import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../App";
import { store } from "../../store";

export const fetchEpisodes = createAsyncThunk(
  "characterEpisodesInfo/fetchEpisodes",
  async (_, { rejectWithValue }) => {
    const { selectedId } = store.getState();
    try {
      const characterRequest = await axiosConfig.get(
        `/character/${selectedId}`
      );
      const res = await characterRequest.data;
      const episodesId = res.episode?.map((episode) =>
        episode.split("/").at(-1)
      );
      const episodeRequest = await axiosConfig.get(`/episode/${episodesId}`);
      const episodeRes = await episodeRequest.data;
      return episodeRes;
    } catch (error) {
      rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  episodesData: [],
  loading: false,
  error: "",
};

export const characterEpisodesInfoSlice = createSlice({
  name: "characterEpisodesInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodes.pending, (state) => {
      state.loading = true;
      state.episodesData = [];
      state.error = "";
    });
    builder.addCase(fetchEpisodes.fulfilled, (state, action) => {
      state.loading = false;
      state.episodesData = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.error = "";
    });
    builder.addCase(fetchEpisodes.rejected, (state, action) => {
      state.loading = false;
      state.episodesData = [];
      state.error = action.payload;
    });
  },
});

export default characterEpisodesInfoSlice.reducer;
