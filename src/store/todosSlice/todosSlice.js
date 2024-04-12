import { createSlice } from "@reduxjs/toolkit";
import { SHOW_ALL } from "../actions/actionNames";

const initialState = {
  todoList: [],
  currentFilter: SHOW_ALL,
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setVisibilityFilter(state, action) {
      state.currentFilter = action.payload;
    },
    addTodo(state, action) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    removeCompletedTodo(state) {
      state.todoList = state.todoList.filter((todo) => !todo.completed);
    },
    toggleTodo(state, action) {
      const todo = state.todoList.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    toggleAllTodo(state) {
      const allCompleted = state.todoList.every((todo) => todo.completed);
      state.todoList.forEach((todo) => {
        todo.completed = !allCompleted;
      });
    },
    editTodo(state, action) {
      const todo = state.todoList.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText;
      }
    },
  },
});

export const {
  setVisibilityFilter,
  addTodo,
  removeTodo,
  removeCompletedTodo,
  toggleTodo,
  toggleAllTodo,
  editTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
