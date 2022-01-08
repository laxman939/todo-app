import { useState, useEffect } from "react";
import DateSection from "./Components/DateSection";
import Input from "./Components/Input";
import TodoList from "./Components/TodoList";

//To get data from localStorage
const getItems = () => {
  let lists = localStorage.getItem("list");

  if (lists) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [todos, setTodos] = useState(getItems()); //Collect items in main app component not in Input child component

  const addTodo = (item) => {
    setTodos((prevItems) => {
      return [...prevItems, item];
    });
  };

  //To store  data in local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]); //if todos changes useEffect invokes

  //To delete todo
  const deleteItem = (id) => {
    setTodos((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="app">
      <div className="heading">
        <h1>TodoList</h1>
      </div>
      <div className="todos">
        <DateSection />
        <Input addTodo={addTodo} />
        <TodoList todos={todos} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
