import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/Root";
import HomePage from "./Pages/Home";
import ErrorPage from "./Pages/Error";
import ProductsRootLayout from "./Pages/ProductsRoot";
import ProductDetailPage from "./Pages/ProductDetail";
import OfficeBox from "./Components/Products/OfficeBox";
import RoastersRootLayout from "./Pages/RoastersRoot";
import RoasterDetailPage from "./Pages/RoasterDetail";
import LearnOurStoryPage from "./Pages/LearnOurStory";
import LearnHowItWorksPage from "./Pages/LearnHowItWorks";
import LearnSustainabilityPage from "./Pages/LearnSustainability";

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
      {
        path: "roasters",
        element: <RoastersRootLayout />,
        children: [{ path: ":roasterId", element: <RoasterDetailPage /> }],
      },
    ],
  },
  {
    path: "/pages",
    children: [
      {
        path: "our-story",
        element: <LearnOurStoryPage />,
      },
      {
        path: "how-it-works",
        element: <LearnHowItWorksPage />,
      },
      {
        path: "sustainability",
        element: <LearnSustainabilityPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
