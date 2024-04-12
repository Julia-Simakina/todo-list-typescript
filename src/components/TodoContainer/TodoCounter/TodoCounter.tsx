import React from "react";
import { useSelector } from "react-redux";
import { filteredTodosSelector } from "../../../store/selectors/selectors";

const TodoCounter = React.memo(() => {
  const { activeTodosCount } = useSelector(filteredTodosSelector);

  return (
    <span>
      {activeTodosCount} {activeTodosCount === 1 ? "todo" : "todos"} left
    </span>
  );
});

export default TodoCounter;
