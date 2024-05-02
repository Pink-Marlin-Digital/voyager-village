import React from "react";
import Helmet from "react-helmet";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Index } from "./Pages";
import DetailBlog from "./Pages/blog/detail";
import AllUpdates from "./Pages/blog";

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
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Helmet />
    </>
  );
}

export default App;
