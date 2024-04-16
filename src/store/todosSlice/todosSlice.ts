import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterValueEnum, ITodo } from "../../types/types";
// import { IFilter } from "../../types/types";

type TodosStateType = {
  todoList: ITodo[];
  currentFilter: FilterValueEnum;
};

const initialState: TodosStateType = {
  todoList: [],
  currentFilter: FilterValueEnum.SHOW_ALL,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<FilterValueEnum>) {
      state.currentFilter = action.payload;
    },
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<ITodo["id"]>) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    removeCompletedTodo(state) {
      state.todoList = state.todoList.filter((todo) => !todo.completed);
    },
    toggleTodo(state, action: PayloadAction<ITodo["id"]>) {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
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
    editTodo(
      state,
      action: PayloadAction<{ id: ITodo["id"]; newText: ITodo["text"] }>
    ) {
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
