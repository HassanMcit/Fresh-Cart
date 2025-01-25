import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Brands from "./Components/Brands/Brands";
import Categories from "./Components/Categories/Categories";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Design from "./Components/Design/Design";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import DesignForget from "./Components/DesignForget/DesignForget";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import VerifyCode from "./Components/VerifyCode/VerifyCode";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import AuthContext from "./Context/AuthContext/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  const x = createBrowserRouter([
    {
      path: "",
      element: <Design />,
      children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "Home", element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "Products", element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: "Categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: "Brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: "Register", element: <Register /> },
        { path: "Login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "ForgetPassword",
      element: <DesignForget />,
      children: [
        { index: true, element: <ForgetPassword /> },
        { path: "verifycode", element: <VerifyCode /> },
        { path: "ResetPassword", element: <ResetPassword /> },
      ],
    },
  ]);

  return (
    <>
      <AuthContext >
        <RouterProvider router={x} />
      </AuthContext>
    </>
  );
}

export default App;
