import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RootLayout from "./components/general/RootLayout";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import Register from "./components/auth/Register";
import PageTransition from "./pages/PageTransition";

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
    element: (
      <PageTransition>
        <Register />
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
