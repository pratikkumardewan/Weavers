import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo() {
    if (val.trim() === "") {
      setVal("");
      return;
    }

    setTodo([...todo, { title: val.trim(), id: Date.now() }]);
    setVal("");
  }

  function deleteTodo(todoId) {
    const updatedTodos = todo.filter((item) => item.id !== todoId);
    setTodo(updatedTodos);
  }

  return (
    <>
      <h1>Todo App</h1>

      <input
        placeholder="Enter Todo"
        value={val}
        className="border border-gray-300"
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
        onChange={(e) => setVal(e.target.value)}
      ></input>

      <button onClick={addTodo}>Enter</button>

      {
        todo.map((item) => (
          <div key={item.id}>
            {" "}
            {item.title}{" "}
            <button onClick={() => deleteTodo(item.id)}>Del</button>
          </div>
        ))

      }
    </>
  );
};

export default App;
