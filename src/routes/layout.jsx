import React from "react";
import { Outlet } from "react-router-dom";
import MyFooter from "~/components/MyFooter/MyFooter";
import MyNavbar from "~/components/MyNavbar/MyNavbar";

const brand = "My-React-Board";
export default function BoardLayout() {
  return (
    <>
      <MyNavbar brandTitle={brand} />
      <Outlet />
      <MyFooter brandTitle={brand} />
    </>
  );
}
