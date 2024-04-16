import React from "react";
import { filteredTodosSelector } from "../../../store/selectors/selectors";
import { useAppSelector } from "../../../store/store";

const TodoCounter = React.memo(() => {
  const { activeTodosCount } = useAppSelector(filteredTodosSelector);

  return (
    <span>
      {activeTodosCount} {activeTodosCount === 1 ? "todo" : "todos"} left
    </span>
  );
});

export default TodoCounter;
