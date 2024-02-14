import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mainRouter } from "./routers/main-router";
function renderRoutes(routesObj) {
  console.log(routesObj);
  return routesObj.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={route.element}
        >
          {route.children ? renderRoutes(route.children) : null}
        </Route>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={route.element}
      />
    );
  });
}
export default function App() {
  return (
    <div className="min-vh-100">
      <BrowserRouter>
        <h1>layout 영역</h1>
        <Routes>{renderRoutes(mainRouter)}</Routes>
      </BrowserRouter>
    </div>
  );
}
