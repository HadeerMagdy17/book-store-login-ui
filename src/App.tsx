import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLayout from "./Modules/Shared/components/AuthLayout/AuthLayout";
import NotFound from "./Modules/Shared/components/NotFound/NotFound";
import Login from "./Modules/AuthModule/Components/Login/Login";
import Register from "./Modules/AuthModule/Components/Register/Register";
import ForgetPassword from "./Modules/AuthModule/Components/ForgetPassword/ForgetPassword";
import ResetPassword from "./Modules/AuthModule/Components/ResetPassword/ResetPassword";
import ChangePassword from "./Modules/AuthModule/Components/ChangePassword/ChangePassword";
import MasterLayout from "./Modules/Shared/components/MasterLayout/MasterLayout";
import Home from "./Modules/HomeModule/components/Home/Home";
import CartDetails from "./Modules/CartModule/components/CartDetails/CartDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgetpass", element: <ForgetPassword /> },
        { path: "resetpass", element: <ResetPassword /> },
        { path: "changepass", element: <ChangePassword /> },
      ],
    },
    {
      path: "/dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "cart", element: <CartDetails /> },
        // { path: "books", element: <ProductPage /> },
        // { path: "about", element: <About /> },

        // { path: "book/:bookId", element: <BookDetails /> },
        // { path: "confirmation", element: <Confirmation /> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
