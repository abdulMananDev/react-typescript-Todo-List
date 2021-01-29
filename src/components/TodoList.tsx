import React from "react";

interface ListProp {
  list: {
    id: number;
    text: string;
  }[];
  deleteFunction: (id: string) => void;
}
const TodoList: React.FC<ListProp> = props => {
  return (
    <>
      <ol>
        {props.list.map(item => {
          return (
            <>
              <li key={item.id}>
                {item.text}{" "}
                <button
                  onClick={props.deleteFunction.bind(null, item.id.toString())}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ol>
    </>
  );
};
export default TodoList;
