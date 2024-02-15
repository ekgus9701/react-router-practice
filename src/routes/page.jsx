import React from "react";
import { useLocation } from "react-router-dom";

export default function MainPage() {
  //localStorage.clear();
  const flag = localStorage.getItem("login");
  if (flag !== "true") localStorage.setItem("login", "false");
  let location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>This is my MainPage</h1>
      <p>MainPage입니다.</p>
    </div>
  );
}
