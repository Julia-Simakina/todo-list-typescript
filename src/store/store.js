// import rootReducer from "./reducers/rootReducer";
// import { legacy_createStore as createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";

// import { todosReducer } from "./reducers/todosReducer";
import todosReducer from "./todosSlice/todosSlice";
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
