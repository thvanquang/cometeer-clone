import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/Root";
import HomePage from "./Pages/Home";
import ErrorPage from "./Pages/Error";
import ProductsRootLayout from "./Pages/ProductsRoot";
import ProductDetailPage from "./Pages/ProductDetail";
import OfficeBox from "./Components/Products/OfficeBox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsRootLayout />,
        children: [{ path: ":productId", element: <ProductDetailPage /> }],
      },
      {
        path: "products/office-box-1",
        element: <OfficeBox />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
