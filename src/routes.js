// External Imports
import React from "react";
// My Imports
import Home from "./screens/Home";
import Error404 from "./screens/Error404";

export default [
  {
    exact: true,
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
];
