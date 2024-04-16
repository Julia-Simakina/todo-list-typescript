import "./AddTodo.css";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import { filteredTodosSelector } from "../../../store/selectors/selectors";
import { addTodo, toggleAllTodo } from "../../../store/todosSlice/todosSlice";
import { ITodo } from "../../../types/types";

const AddTodo: React.FC = () => {
  const { filteredTodos, isAllCompletedChecked } = useAppSelector(
    filteredTodosSelector
  );

  const [text, setText] = useState(""); 
  const dispatch = useAppDispatch();

  const addNewTodo = (newTodo: ITodo) => {
    dispatch(addTodo(newTodo));
  };

  const toggleAllTodoChange = () => {
    dispatch(toggleAllTodo());
  };

  const createTodo = (
    text: ITodo["text"],
    completed: ITodo["completed"] = false
  ): ITodo => {
    return {
      id: Date.now(),
      text,
      completed,
    };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text.trim()) {
      const newTodo = createTodo(text);
      addNewTodo(newTodo);
      setText("");
    }
  };

  return (
    <>
      {Boolean(filteredTodos.length) && (
        <input
          type="checkbox"
          className="all-completed"
          onChange={toggleAllTodoChange}
          checked={isAllCompletedChecked}
        />
      )}

      <input
        onKeyDown={handleKeyDown}
        className="todo-input"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default AddTodo;
