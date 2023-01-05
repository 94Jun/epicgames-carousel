import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  todoList: [],
};
const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    SET_TODO: (state, action) => {
      state.todoList = action.payload;
    },
    ADD_TODO: (state, action) => {
      state.todoList.push(action.payload);
    },
    REMOVE_TODO: (state, action) => {
      const { id } = action.payload;
      const updatedTodoList = state.todoList.filter((todo) => todo.id !== id);
      state.todoList = updatedTodoList;
      // const updatedState = { ...state, todoList: updatedTodoList };
      // return updatedState;
      // 전체 state를 새로 만들어서 교체하는 방법
    },
    MODIFY_TODO: (state, action) => {
      const { id, content } = action.payload;
      const existingTodo = state.todoList.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.content = content;
      }
      //immer : find 등의 참조 값이 변경되지 않는 함수를 사용하여 특정 데이터를 변경하게 되면
      //변경된 데이터 외의 데이터는 기존 값으로 유지되고, 변경된 데이터만 state 인식
    },
  },
});
export const { SET_TODO, ADD_TODO, REMOVE_TODO, MODIFY_TODO } = todo.actions;
export default todo.reducer;
