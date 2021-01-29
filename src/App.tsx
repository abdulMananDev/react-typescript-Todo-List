import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodos from "./components/AddTodos";
import { A } from "./todo.model";

const App: React.FC = () => {
  const [list, setList] = React.useState<A[]>([]);
  const [count, setCount] = React.useState(0);

  const todoAddHandler = (inputText: string) => {
    // setList(prev => prev.concat({ id: Math.random(), text: inputText }));
    // OR
    setCount(prev => prev + 1);
    setList(prev => [...prev, { id: Math.random(), text: inputText }]);
  };
  const deleteTodo = (id: string) => {
    setCount(prev => prev - 1);
    setList(prev => prev.filter(delItem => delItem.id !== +id));
  };
  return (
    <div className="App">
      <AddTodos todoHandlerFunction={todoAddHandler} />
      <div className="logger">
        {count === 0 ? (
          <span>Yippeee!! NO Goals Left</span>
        ) : (
          <span>{count} Goals Left</span>
        )}
      </div>
      <TodoList list={list} deleteFunction={deleteTodo} />
    </div>
  );
};

export default App;
