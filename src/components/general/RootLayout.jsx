import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import animations from "../../animations/animationTypes";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [role, setRole] = useState(null);
  const location = useLocation();

  // should I use useEffect() and useState() here or just directly extract the role in a const????
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <>
      <Navigation navBarStyle="unauthorized">
        {isAuthenticated && undefined}
        {!isAuthenticated && (
          <div className="auth-box">
            <Link to="/register" className="nav-link">
              Sign Up
            </Link>
            <p>/</p>
            <Link to="/login" className="nav-link">
              Log In
            </Link>
          </div>
        )}
      </Navigation>
      <motion.div
        key={location.pathname}
        variants={animations.fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
    </>
  );
}
