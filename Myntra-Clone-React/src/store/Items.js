import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addBagItems(state, action) {
      console.log(state, action);
      return action.payload;
    },
  },
});
export const ItemActions = ItemsSlice.actions;
export default ItemsSlice;
