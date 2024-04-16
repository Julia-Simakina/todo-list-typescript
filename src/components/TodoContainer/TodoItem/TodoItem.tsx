import "./TodoItem.css";
import { useAppDispatch } from "../../../store/store";
import {
  removeTodo,
  toggleTodo,
  editTodo,
} from "../../../store/todosSlice/todosSlice";
import { useState } from "react";
import EditField from "../EditField/EditField";
import { ITodo } from "../../../types/types";

type TodoItemPropsType = {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemPropsType> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState<string>("");

  const dispatch = useAppDispatch();

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
      dispatch(editTodo({ id: props.todo.id, newText: editText }));
      setIsEditing(false);
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
    setIsEditing(false);
    setEditText(props.todo.text);
  };

  return (
    <li className="todo-list__item item" id={props.todo.id.toString()}>
      {isEditing ? (
        <EditField
          value={editText}
          onChange={handleEditChange}
          onKeyDown={checkEnterKey}
          onBlur={handleExit}
        />
      ) : (
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
              setIsEditing(true);
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
      )}
    </li>
  );
};

export default TodoItem;
