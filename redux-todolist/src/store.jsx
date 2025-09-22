import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./slice.jsx";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
