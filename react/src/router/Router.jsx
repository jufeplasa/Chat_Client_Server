import { createBrowserRouter } from "react-router-dom";
import { Home, Article, Login, Register, Purchase, Cart } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
]);

export default router;
