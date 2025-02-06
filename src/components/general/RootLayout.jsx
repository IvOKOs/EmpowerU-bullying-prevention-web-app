import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import animations from "../../animations/animationTypes";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

export default function RootLayout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

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
