import { createSelector } from "reselect";
import { RootState } from "../store";
import { FilterValueEnum, ITodo } from "../../types/types";

export const getTodos = (state: RootState) => state.todos.todoList;
export const getVisibilityFilter = (state: RootState) =>
  state.todos.currentFilter;

export const filteredTodosSelector = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, visibilityFilter) => {
    let filteredTodos: ITodo[] = [];

    let activeTodosCount = 0;

    let completedFilteredTodos2 = true;

    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];

      if (completedFilteredTodos2 && !todo.completed) {
        completedFilteredTodos2 = false;
      }

      switch (visibilityFilter) {
        case FilterValueEnum.SHOW_COMPLETED:
          if (todo.completed) {
            filteredTodos.push(todo);
          }
          break;
        case FilterValueEnum.SHOW_ACTIVE:
          if (!todo.completed) {
            activeTodosCount++;
            filteredTodos.push(todo);
          }
          break;
        case FilterValueEnum.SHOW_ALL:
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
