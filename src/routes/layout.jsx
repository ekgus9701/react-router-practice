import React from "react";
import { Outlet } from "react-router-dom";
import MyFooter from "~/components/MyFooter/MyFooter";
import MyNavbar from "~/components/MyNavbar/MyNavbar";
import { Provider } from "react-redux";
import store from "~/store";

const brand = "My-React-Board";
export default function BoardLayout() {
  return (
    <>
      <Provider store={store}>
        {/* <Counter /> */}
        <MyNavbar brandTitle={brand} />
      </Provider>

      <Outlet />
      <MyFooter brandTitle={brand} />
    </>
  );
}
