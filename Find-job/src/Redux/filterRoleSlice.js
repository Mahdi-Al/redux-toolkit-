// src/features/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
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
      state.keywords = state.keywords.filter((key) => key !== action.payload);
    },
    clearKeywords: (state) => {
      state.keywords = [];
    },
  },
});

export const { addKeyword, removeKeyword, clearKeywords } = filterSlice.actions;
export default filterSlice.reducer;
