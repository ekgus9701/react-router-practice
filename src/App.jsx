import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routers/main-router";
import AuthProvider from "./components/AuthProvider";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return <RouterProvider router={mainRouter}></RouterProvider>;
}

export default App;
