
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Contact from "../pages/contact/Contact";

export const PageRoute = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
