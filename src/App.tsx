import React from "react";
import Header from "./components/Header/Header";
import TodoContainer from "./components/TodoContainer/TodoContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TodoContainer />
    </div>
  );
};

export default App;
