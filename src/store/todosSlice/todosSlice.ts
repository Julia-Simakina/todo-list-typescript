import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/actionNames';
import { Todo } from '../../types/types';

interface TodosState {
  todoList: Todo[];
  currentFilter: typeof SHOW_ALL | typeof SHOW_ACTIVE | typeof SHOW_COMPLETED;
}

const initialState: TodosState = {
  todoList: [],
  currentFilter: SHOW_ALL
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setVisibilityFilter(
      state,
      action: PayloadAction<typeof SHOW_ALL | typeof SHOW_ACTIVE | typeof SHOW_COMPLETED>
    ) {
      state.currentFilter = action.payload;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<Todo["id"]>) {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },
    removeCompletedTodo(state) {
      state.todoList = state.todoList.filter(todo => !todo.completed);
    },
    toggleTodo(state, action: PayloadAction<Todo["id"]>) {
      const todo = state.todoList.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    toggleAllTodo(state) {
      const allCompleted = state.todoList.every(todo => todo.completed);
      state.todoList.forEach(todo => {
        todo.completed = !allCompleted;
      });
    },
    editTodo(state, action: PayloadAction<{ id: number | null; newText: string }>) {
      const todo = state.todoList.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText;
      }
    }
  }
});

export const {
  setVisibilityFilter,
  addTodo,
  removeTodo,
  removeCompletedTodo,
  toggleTodo,
  toggleAllTodo,
  editTodo
} = todosSlice.actions;

export default todosSlice.reducer;
