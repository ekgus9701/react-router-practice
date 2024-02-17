import React from "react";
import { useLocation } from "react-router-dom";

export default function MainPage() {
  const flag = sessionStorage.getItem("login");
  if (flag !== "true") sessionStorage.setItem("login", "false");
  let location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>This is my MainPage</h1>
      <p>MainPage입니다.</p>
    </div>
  );
}
