import React from "react";
type TypeFunction = {
  todoHandlerFunction: (text: string) => void;
};
const AddTodos: React.FC<TypeFunction> = props => {
  let listInput = React.useRef<HTMLInputElement>(null);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    let userInput = listInput.current!.value;
    props.todoHandlerFunction(userInput);
    listInput.current!.value = "";
  };
  return (
    <div className="todoForm">
      <form onSubmit={addTodo}>
        <input
          ref={listInput}
          type="text"
          id="todoForm__input"
          placeholder="Enter Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodos;
