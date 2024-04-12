import { createSelector } from "reselect";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../actions/actionNames";
export const getTodos = (state) => state.todos.todoList;
export const getVisibilityFilter = (state) => state.todos.currentFilter;

export const filteredTodosSelector = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, visibilityFilter) => {
    let filteredTodos = [];

    let activeTodosCount = 0;

    let completedFilteredTodos2 = true;

    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];

      if (completedFilteredTodos2 && !todo.completed) {
        completedFilteredTodos2 = false;
      }

      switch (visibilityFilter) {
        case SHOW_COMPLETED:
          if (todo.completed) {
            filteredTodos.push(todo);
          }
          break;
        case SHOW_ACTIVE:
          if (!todo.completed) {
            activeTodosCount++;
            filteredTodos.push(todo);
          }
          break;
        case SHOW_ALL:
        default:
          filteredTodos.push(todo);
          if (!todo.completed) {
            activeTodosCount++;
          }
      }
    }

    return {
      isAllCompletedChecked: completedFilteredTodos2,
      filteredTodos,
      activeTodosCount,
    };
  }
);
