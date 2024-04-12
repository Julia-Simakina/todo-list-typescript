import "./TodoContainer.css";

import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
import Filters from "./Filters/Filters";

const TodoContainer = () => {
  return (
    <>
      <div className="todo-container">
        <AddTodo />
        <TodoList />
        <Filters />
      </div>
    </>
  );
};

export default TodoContainer;
