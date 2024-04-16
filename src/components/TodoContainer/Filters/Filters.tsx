import "./Filters.css";
import React from "react";
import {
  removeCompletedTodo,
  setVisibilityFilter,
} from "../../../store/todosSlice/todosSlice";
import { filterButtons } from "../../../utils/constants";
import FilterButton from "../FilterButton/FilterButton";
import TodoCounter from "../TodoCounter/TodoCounter";
import ClearCompletedButton from "../ClearCompletedButton/ClearCompletedButton";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import { IFilterButton } from "../../../types/types";

const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todoList);
  const visibilityFilter = useAppSelector((state) => state.todos.currentFilter);

  if (!todos.length) {
    return null;
  }

  const handleClearCompletedTodo = () => {
    dispatch(removeCompletedTodo());
  };

  const handleSetVisibilityFilter = (filter: IFilterButton["value"]) => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <>
      <div className="todo-filters">
        <TodoCounter />
        <ul className="filters">
          {filterButtons.map((button) => (
            <FilterButton
              key={button.name}
              name={button.name}
              isActive={visibilityFilter === button.value}
              onClick={() => handleSetVisibilityFilter(button.value)}
            />
          ))}
        </ul>
        <ClearCompletedButton onClick={handleClearCompletedTodo} />
      </div>
    </>
  );
};

export default Filters;
