import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThankYou from "./components/ThankYou";
import Card from "./components/Card";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "submitted",
        element: <ThankYou />,
      },
    ],
  },
]);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={router} />);
