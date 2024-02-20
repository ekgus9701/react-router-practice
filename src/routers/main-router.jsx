import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/page";

import LoginPage from "~/routes/login/page";
import SignupPage from "~/routes/signup/page";
import BoardListPage from "~/routes/board/page";
import BoardWritePage from "~/routes/board/rewrite/page";
import BoardDetailPage from "~/routes/board/detail/page";
import Layout from "~/routes/layout";
import Todo from "~/routes/todo/page";
import { Provider } from "react-redux";

import store from "~/store";

export const mainRouter = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <MainPage />,
      },
      {
        path: "/todo",
        index: true,
        element: (
          <Provider store={store}>
            {/* <Counter /> */}
            <Todo />
          </Provider>
        ),
      },
      {
        path: "/board/",
        children: [
          {
            path: "signup",
            element: <SignupPage />,
            index: true,
          },
          {
            path: "",
            element: <BoardListPage />,
            // index: true,
            children: [
              {
                path: ":boardId/edit",
                element: <BoardWritePage />,
                index: true,
              },
            ],
          },

          {
            path: ":boardId",
            element: <BoardDetailPage />,
            index: true,
          },
          {
            path: "login",
            element: <LoginPage />,
            index: true,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(mainRouter);

export default router;
