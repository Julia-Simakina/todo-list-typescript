import "./TodoItem.css";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleTodo,
  editTodo,
} from "../../../store/todosSlice/todosSlice";
import { useState } from "react";
import EditField from "../EditField/EditField";
import { Todo } from "../../../types/types";

interface IProps {
  todo: Todo;
}

const TodoItem: React.FC<IProps> = (props) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(props.todo.id));
  };

  const handleCheckboxChange = () => {
    dispatch(toggleTodo(props.todo.id));
  };

  const handleEditTodo = () => {
    if (!editText.trim()) {
      setEditText("");
    } else {
      dispatch(editTodo(editId as number, editText));
      setEditId(null);
      setEditText("");
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const checkEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      return handleExit();
    }
    if (e.key !== "Enter") return;

    handleEditTodo();
  };

  const handleExit = () => {
    setEditId(null);
    setEditText(props.todo.text);
  };

  return (
    <li className="todo-list__item item" id={props.todo.id?.toString()}>
      {!editId ? (
        <>
          <input
            type="checkbox"
            className="item__checkbox"
            onChange={handleCheckboxChange}
            checked={props.todo.completed}
          />
          <label
            className={`item__description ${
              props.todo.completed && "item__description_checked"
            }`}
            onDoubleClick={() => {
              setEditId(props.todo.id);
              setEditText(props.todo.text);
            }}
          >
            {props.todo.text}
          </label>
          <button
            className="button item__delete-btn"
            onClick={handleRemoveTodo}
          >
            ×
          </button>
        </>
      ) : (
        <EditField
          value={editText}
          onChange={handleEditChange}
          onKeyDown={checkEnterKey}
          onBlur={handleExit}
        />
      )}
    </li>
  );
};

export default TodoItem;
