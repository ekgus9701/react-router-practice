import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter";
import todoReducer from "./reducers/todo";

const rootReducer = combineReducers({
  //counter: counterReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer);

console.log(store.getState());
console.log(store.dispatch);

export default store;
