import React from "react";

export default function SingleTodo(props) {
  // console.log(props);
  return (
    <div className="single-items">
      <li id="item">
        <div className="d-flex align-items-center">
          <input type="checkbox" />
          <div>{props.todo}</div>
        </div>
        <button
          id="delete-btn"
          onClick={() => {
            props.handleDelete(props.id);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    </div>
  );
}
//props.id got from app.js id={index}
