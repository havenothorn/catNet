import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";

function App() {
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
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
