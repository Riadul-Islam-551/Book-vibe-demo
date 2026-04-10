import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import About from "../about/About";
import Home from "../home/Home";
import Contact from "../contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
