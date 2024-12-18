import { Link, Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function RootLayout() {
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
      <Outlet />
    </>
  );
}
