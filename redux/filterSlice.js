import { createSlice } from "@reduxjs/toolkit";

let data;

const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    allPosts(state, { payload }) {
      // checking if we are changing the value
      if (typeof payload === "string") {
        // filtering the data and put it in the second index
        // so default data is the first index
        let newData = state[0].filter(
          (post) => post.category.split(" ")[1] === payload
        );
        if (payload === "All Posts(32)") {
          state[1] = state[0];
          return;
        }
        state[1] = newData;
      } else {
        // in initial render render this default data
        state.push(payload);
      }
    },
  },
});

export default filterSlice.reducer;
export const { allPosts } = filterSlice.actions;
