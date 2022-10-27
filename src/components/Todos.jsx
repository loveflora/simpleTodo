import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const sumbitHandler = (event) => {
    event.preventDefault();
    const content = event.target.content; // input

    const todo = {
      id: todos.length + 1,
      content: content.value,
      isCheck: false,
    };

    setTodos((prevState) => [...prevState, todo]);

    content.value = "";
  };

  const toggleHandler = (id) => {
    const copy = [...todos];
    const index = copy.findIndex((v) => v.id === id);
    copy[index].isCheck = !copy[index].isCheck;
    setTodos(copy);
  };

  const deleteHandler = (id) => {
    setTodos((prevState) => prevState.filter((v) => v.id !== id));
  };

  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <input id="content" />
        <button type="submit">제출</button>
      </form>
      <ul>
        {todos.map((v) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                checked={v.isChcek}
                onChange={() => toggleHandler(v.id)}
              />
              <span>
                {v.content} {v.isCheck ? "true" : "false"}
              </span>
              <button onClick={() => deleteHandler(v.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
