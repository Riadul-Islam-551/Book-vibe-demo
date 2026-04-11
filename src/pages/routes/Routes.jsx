import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../home/Home";
import ListedBook from "../listedBook/ListedBook";
import PageToLoad from "../pagetoLoad/PageToLoad";

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
        path: "listedBooks",
        element: <ListedBook></ListedBook>,
      },
      {
        path: "pageToRead",
        element: <PageToLoad></PageToLoad>,
      },
    ],
  },
]);

export default router;
