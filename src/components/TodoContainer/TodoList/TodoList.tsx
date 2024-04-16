import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import { filteredTodosSelector } from "../../../store/selectors/selectors";
import { ITodo } from "../../../types/types";
import { useAppSelector } from "../../../store/store";

const TodoList: React.FC = () => {
const { filteredTodos } = useAppSelector(filteredTodosSelector);

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo: ITodo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
