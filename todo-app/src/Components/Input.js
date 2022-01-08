import React, { useState } from "react";

const Input = (props) => {
  const [item, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  return (
    <div className="input-group mb-3 input-box">
      <input
        className="form-control input-text"
        type="text"
        onChange={handleChange}
        value={item}
        placeholder="Enter a new todo..."
      />
      <button
        className="btn btn-outline-secondary"
        id="button-addon2"
        type="button"
        onClick={() => {
          props.addTodo(item);
          setItem("");
        }}
      >
        <i class="fas fa-plus-circle"></i>
      </button>
    </div>
  );
};

export default Input;
