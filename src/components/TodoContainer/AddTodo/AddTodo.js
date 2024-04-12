import "./AddTodo.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo, toggleAllTodo } from "../../../store/actions/actions";
import { filteredTodosSelector } from "../../../store/selectors/selectors";
import { addTodo, toggleAllTodo } from "../../../store/todosSlice/todosSlice";

const AddTodo = () => {
  const { filteredTodos, isAllCompletedChecked } = useSelector(
    filteredTodosSelector
  );

  const [text, setText] = useState(""); //текст инпута
  const dispatch = useDispatch();

  const addNewTodo = (newTodo) => {
    dispatch(addTodo(newTodo));
  };

  const toggleAllTodoChange = () => {
    dispatch(toggleAllTodo());
  };

  const createTodo = (text, completed = false) => {
    return {
      id: Date.now(),
      text,
      completed,
    };
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && text.trim()) {
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
