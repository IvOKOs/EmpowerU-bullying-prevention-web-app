import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import animations from "../../animations/animationTypes";
import Navigation from "./Navigation";

export default function RootLayout() {
  const location = useLocation();
  return (
    <>
      <Navigation navBarStyle="unauthorized">
        <div className="auth-box">
          <Link to="/register" className="nav-link">
            Sign Up
          </Link>
          <p>/</p>
          <Link className="nav-link">Log In</Link>
        </div>
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
