import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./modules/todo";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export default store;
