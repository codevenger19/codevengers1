// ** React Imports
import React from "react";
import { lazy } from "react";
const Login = lazy(() => import("../../views/Auth/Login"));

const Routes = [
  {
    path: "/",
    index: true,
    element: <Login />,
  },
];

export { Routes };
