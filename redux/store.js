import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import filterReducer from "./filterSlice";
export const store = configureStore({
  reducer: {
    formIsVisible: formReducer,
    filter: filterReducer,
  },
});
