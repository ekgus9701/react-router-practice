const initialState = {
  todo: [],
};

//Action Type 정의
export const ADD_TODO = "todo/ADD_TODO";
export const DELETE_TODO = "todo/DELETE_TODO";

//Action Creator
export const addTodo = (text, todoId, color) => {
  //액션이 반환됨
  return {
    type: ADD_TODO,
    payload: { text, todoId, color },
  };
};

export const deleteTodo = (todoId) => {
  console.log("여기", todoId);
  //액션이 반환됨
  return {
    type: DELETE_TODO,
    payload: { todoId },
  };
};

//Reducer
function todoReducer(state = initialState, action) {
  switch (action.type) {
    // 리듀서에서의 변경
    case ADD_TODO:
      // 스테이트를 새롭게 만들어 반환함
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            text: action.payload.text,
            todoId: action.payload.todoId,
            color: action.payload.color,
          },
        ],
      };

    case DELETE_TODO:
      console.log("응응", state.todo);
      return {
        todo: state.todo.filter(
          (data) => data.todoId !== action.payload.todoId
        ),
      };

    default:
      return state;
  }
}

export default todoReducer;
