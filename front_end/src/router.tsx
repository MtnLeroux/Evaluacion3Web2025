import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Arriendos from "./views/Arriendos";
import ActCon from "./views/ActCon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "arriendos",
        element: <Arriendos />,
      },
      {
        path: "usuarios",
        element: <ActCon />,
      },
    ],
  },
]);
