import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "~/store/reducers/todo";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const todoObj = useSelector((todo) => todo);
  const dispatch = useDispatch();
  const COLOR_MAP = [
    { color: "#ccd5ae" },
    { color: "#e9edc9" },
    { color: "#fefae0" },
    { color: "#faedcd" },
  ];
  // console.log(todoObj);

  const [inputText, setInputText] = useState("");
  const [activeColor, setActiveColor] = useState("");

  return (
    <div>
      <h1>TodoList</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <input
          type="text"
          style={{ backgroundColor: activeColor }}
          onChange={(e) => {
            setInputText(e.target.value);
            // dispatch(setColor(e.target.value));
          }}
        />
        <button
          onClick={() => {
            const action = addTodo(inputText, uuidv4(), activeColor);
            console.log(action);
            dispatch(action); //action을 제출하는 함수
          }}
        >
          입력
        </button>
      </div>

      <div className="colors" style={{ display: "flex" }}>
        {COLOR_MAP.map((elem) => (
          <div
            key={elem.color}
            onClick={() => {
              setActiveColor(elem.color);
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: elem.color,
              border: "1px solid",
              borderRadius: 5,
              borderColor: "e9e9e9",
              margin: "1px",
            }}
          ></div>
        ))}
      </div>

      <ul>
        {todoObj["todo"].todo.map((data) => {
          return (
            <li style={{ backgroundColor: data.color }}>
              {data.text}
              <button
                onClick={() => {
                  const action = deleteTodo(data.todoId);
                  //   console.log(data.todoId);
                  dispatch(action); //action을 제출하는 함수
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
