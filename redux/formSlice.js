import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { isShown: false, formState: true },
  reducers: {
    open(state, { payload }) {
      state.isShown = true;
    },
    close(state, { payload }) {
      state.isShown = false;
    },
    changeFormState(state, { payload }) {
      if (payload === "signin") state.formState = true;
      else if (payload === "signup") state.formState = false;
    },
  },
});

export default formSlice.reducer;
export const { open, close, changeFormState } = formSlice.actions;
