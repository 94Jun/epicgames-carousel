import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { SET_TODO, ADD_TODO } from "../modules/todo";
import { useState } from "react";
const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => {
    return state.todo.todoList;
  });
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const todoItem = { id: Math.random().toString(), content: input };
    dispatch(ADD_TODO(todoItem));
    setInput("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo_input">todo</label>
        <input type="text" id="todo_input" onChange={onChange} value={input} />
        <button>추가</button>
      </form>
      {todoList &&
        todoList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
    </>
  );
};

export default Todo;
