import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import animations from "../../animations/animationTypes";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function RootLayout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  const navigate = useNavigate();
  const storedRole = sessionStorage.getItem("role");

  useEffect(() => {
    if (
      isAuthenticated &&
      (location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/register")
    ) {
      navigate("/dashboard", { replace: true });
    }
    if (!isAuthenticated && location.pathname === "/dashboard") {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <>
      <Navigation>
        {isAuthenticated && (
          <>
            <Link to="/" className="link">
              ???
            </Link>
            <div className="auth-box">
              <Link to="/" className="nav-link">
                Log Out
              </Link>
            </div>
          </>
        )}
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
