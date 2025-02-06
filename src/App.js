import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RootLayout from "./components/general/RootLayout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PageTransition from "./pages/PageTransition";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <UnauthorizedPage />,
      },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/register",
    element: (
      <PageTransition>
        <Register />
      </PageTransition>
    ),
  },
  {
    path: "/login",
    element: (
      <PageTransition>
        <Login />
      </PageTransition>
    ),
  },
]);

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
