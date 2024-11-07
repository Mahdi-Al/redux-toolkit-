// Redux/filterRoleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filterRoleSlice = createSlice({
  name: "filter",
  initialState: {
    keywords: [],
  },
  reducers: {
    addKeyword: (state, action) => {
      if (!state.keywords.includes(action.payload)) {
        state.keywords.push(action.payload);
      }
    },
    removeKeyword: (state, action) => {
      state.keywords = state.keywords.filter(
        (keyword) => keyword !== action.payload
      );
    },
    clearKeywords: (state) => {
      state.keywords = [];
    },
  },
});

export const { addKeyword, removeKeyword, clearKeywords } =
  filterRoleSlice.actions;
export default filterRoleSlice.reducer;
