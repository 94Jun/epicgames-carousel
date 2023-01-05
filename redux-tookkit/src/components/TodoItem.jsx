import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_TODO, REMOVE_TODO, MODIFY_TODO } from "../modules/todo";
const TodoItem = (props) => {
  // const todoList = useSelector((state) => {
  //   return state.todo.todoList;
  // });
  const [input, setInput] = useState(props.todo.content);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  // const onClick = () => {
  //   const updatedTodoList = todoList.filter((todo) => {
  //     return todo.id !== props.todo.id;
  //   });
  //   dispatch(SET_TODO(updatedTodoList))
  // }
  const onClick = () => {
    dispatch(REMOVE_TODO({ id: props.todo.id }));
  };
  const editHandler = () => {
    setIsEdit(true);
  };
  const editComplete = () => {
    setIsEdit(false);
    dispatch(MODIFY_TODO({ id: props.todo.id, content: input }));
  };
  // const editComplete = () => {
  //   setIsEdit(false);
  //   const updatedTodoItem = {
  //     ...props.todo,
  //     content: input,
  //   };
  //   const currentTodoIndex = todoList.findIndex((todo) => {
  //     return todo.id === props.todo.id;
  //   });
  //   let updatedTodoList = [...todoList];
  //   updatedTodoList[currentTodoIndex] = updatedTodoItem;
  //   dispatch(SET_TODO(updatedTodoList));
  // };
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      {props.todo.content}
      <button onClick={onClick}>x</button>
      <button onClick={editHandler}>수정</button>
      {isEdit && (
        <div>
          <input type="text" value={input} onChange={onChange} />
          <button onClick={editComplete}>수정 완료</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
