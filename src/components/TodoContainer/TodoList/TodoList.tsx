import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { filteredTodosSelector } from "../../../store/selectors/selectors";
import { Todo } from "../../../types/types";

const TodoList: React.FC = () => {
  const { filteredTodos } = useSelector(filteredTodosSelector);

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
