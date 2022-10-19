import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features";

export const store = configureStore({
  reducer: basketReducer,
});
