import React from "react";
// import { ReactDOM } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/login";
import RegisterPage from "../Pages/register";
import ProductsPage from "../Pages/products";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);

export default router;
