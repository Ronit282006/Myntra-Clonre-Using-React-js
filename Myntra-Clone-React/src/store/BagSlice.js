import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addBag: (state, action) => {
      state.push(action.payload);
    },
    RemoveBag: (state, action) => {
      return state.filter((ItemId) => ItemId !== action.payload);
    },
  },
});
export const BagSliceActions = BagSlice.actions;
export default BagSlice;
