import "./App.css";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/general/RootLayout";
import Register from "./components/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <UnauthorizedPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
