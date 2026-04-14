import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../home/Home";
import ListedBook from "../listedBook/ListedBook";
import PageToLoad from "../pagetoLoad/PageToLoad";
import BookDetails from "../bookDetails/BookDetails";
import ErrorPage from "../errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        loader: () => fetch("./booksData.json"),
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

export default router;
