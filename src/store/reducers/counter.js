const initialState = {
  counter: 0,
  color: "black",
};

//Action Type 정의
export const INCREASE_COUNTER = "counter/INCREASE_COUNTER";
export const DECREASE_COUNTER = "counter/DECREASE_COUNTER";
export const SET_COLOR = "counter/SET_COLOR";

//Action Creator
export const increaseCounter = () => {
  //액션이 반환됨
  return {
    type: INCREASE_COUNTER,
    payload: {},
  };
};

export const decreaseCounter = () => {
  //액션이 반환됨
  return {
    type: DECREASE_COUNTER,
    payload: {},
  };
};

export const setColor = (color) => {
  //액션이 반환됨
  return {
    type: SET_COLOR,
    payload: {
      color,
    },
  };
};

//Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      //스테이트를 새롭게 만들어 반환함
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case SET_COLOR:
      return {
        ...state,
        color: action.payload.color,
      };
    default:
      return state;
  }
}

export default counterReducer;
