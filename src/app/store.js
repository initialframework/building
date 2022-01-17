import { configureStore } from "@reduxjs/toolkit";
import buildingsReducer from "./buildingsSlice";

export default configureStore({
  reducer: {
    buildings: buildingsReducer,
  },
});
