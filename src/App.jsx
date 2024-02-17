import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routers/main-router";
import AuthProvider from "./components/AuthProvider";

function App() {
  return <RouterProvider router={mainRouter} />;
}

export default App;
