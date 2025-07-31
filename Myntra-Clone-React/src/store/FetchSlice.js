import { createSlice } from "@reduxjs/toolkit";

const FetchSlice = createSlice({
  name: "featching ",
  initialState: {
    fetchDone: false,
    Currentfetching: false,
  },
  reducers: {
    FetchingDone: (state) => {
      state.Currentfetching = true;
    },

    FetchingStarted: (state) => {
      state.Currentfetching = true;
    },

    FetchingEnd: (state) => {
      state.Currentfetching = false;
    },
  },
});
export const FetchSliceActions = FetchSlice.actions;
export default FetchSlice;
