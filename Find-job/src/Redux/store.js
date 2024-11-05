// src/store.js
// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterRoleSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});

export default store;
