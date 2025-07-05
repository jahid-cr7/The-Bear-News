import { createBrowserRouter } from "react-router";

import Navbar from "../Components/Navbar";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Auth from "../Layout/Auth";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
