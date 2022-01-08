import React from "react";
import SingleTodo from "./SingleTodo";

export default function TodoList(props) {
  const handleDelete = (id) => {
    props.deleteItem(id);
  };

  return (
    <div>
      <ul className="list-items">
        {props.todos.map((item, index) => {
          return (
            <SingleTodo
              key={index}
              id={index}
              todo={item}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}
