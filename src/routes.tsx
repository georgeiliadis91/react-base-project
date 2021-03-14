  
import React from "react";
import { Navigate } from "react-router-dom";
import { DashboardLayout } from "./layout/dashboard";
import { PublicLayout } from "./layout/public/PublicLayout";
import NotFoundView from "./views/NotFoundView";
import MainView from "./views/MainView";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <MainView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Navigate to="/" /> },
      { path: "404", element: <NotFoundView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;