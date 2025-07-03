import { createBrowserRouter } from "react-router";

import Navbar from "../Components/Navbar";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        path: 'category/:id',
        element: <CategoryNews />,
      }
    ]
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);
