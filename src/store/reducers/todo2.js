import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: "1",
      content: "내용",
      color: "black",
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      //툴킷의 immer.js가 state의 주소를 자동으로 바꿔줘서 배열을 새로 만드는 효과가 남
      state.todoList.push(action.payload);
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
