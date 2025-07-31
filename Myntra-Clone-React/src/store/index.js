import { configureStore, createSlice } from "@reduxjs/toolkit";
import ItemsSlice from "./Items";
import FetchSlice from "./FetchSlice";
import bag from "../routs/bag";
import BagSlice from "./BagSlice";
const myntraStore = configureStore({
  reducer: {
    items: ItemsSlice.reducer,
    fetch: FetchSlice.reducer,
    bag: BagSlice.reducer,
  },
});
export default myntraStore;
