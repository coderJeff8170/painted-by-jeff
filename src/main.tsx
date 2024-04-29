import React from "react";
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./routes/Home";



import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import { Digital } from "./routes/Digital";
import { Analog } from "./routes/Analog";
import { Paintings } from "./routes/Paintings";
import { Admin } from "./routes/Admin";
// import { GridPage } from "./routes/GridPage";
// import { FormPage } from "./routes/FormPage";

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
        path: "Analog/Paintings",
        element: <Paintings />
      },
      {
        path: "Analog/Drawings",
        element: <h1>Drawings</h1>,
      },
      {
        path: "Digital",
        element: <Digital />,
      },
      {
        path: "Digital/Frontend",
        element: <h1>Frontend</h1>,
      },
      {
        path: "Digital/Games",
        element: <h1>Games</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
