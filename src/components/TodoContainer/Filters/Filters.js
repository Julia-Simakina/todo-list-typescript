import "./Filters.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCompletedTodo,
  setVisibilityFilter,
} from "../../../store/todosSlice/todosSlice";
import { filterButtons } from "../../../utils/constants";
import FilterButton from "../FilterButton/FilterButton";
import TodoCounter from "../TodoCounter/TodoCounter";
import ClearCompletedButton from "../ClearCompletedButton/ClearCompletedButton";

const Filters = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todoList);
  const visibilityFilter = useSelector((state) => state.todos.currentFilter);

  if (!todos.length) {
    return null;
  }

  const handleClearCompletedTodo = () => {
    dispatch(removeCompletedTodo());
  };

  const handleSetVisibilityFilter = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <>
      <div className="todo-filters">
        <TodoCounter />
        <ul className="filters">
          {filterButtons.map((button) => (
            <FilterButton
              key={button.id}
              name={button.id}
              isActive={visibilityFilter === button.filter}
              onClick={() => handleSetVisibilityFilter(button.filter)}
            />
          ))}
        </ul>
        <ClearCompletedButton onClick={handleClearCompletedTodo} />
      </div>
    </>
  );
};

export default Filters;
