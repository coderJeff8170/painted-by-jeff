import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./routes/Home";
import { Root } from "./routes/Root";
import { Digital } from "./routes/Digital";
import { Analog } from "./routes/Analog";
import { Admin } from "./routes/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>there was an error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Admin",
        element: <Admin />,
      },
      {
        path: "Analog",
        element: <Analog />,
      },
      {
        path: "Digital",
        element: <Digital />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
