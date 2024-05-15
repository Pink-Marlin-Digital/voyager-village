import Helmet from "react-helmet";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Index } from "./Pages";
import DetailBlog from "./Pages/blog/detail";
import AllUpdates from "./Pages/blog";
import NotFoundPage from "./Pages/404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/blogs",
      element: <AllUpdates />,
    },
    {
      path: "/blogs/:slug",
      element: <DetailBlog />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Helmet />
    </>
  );
}

export default App;
