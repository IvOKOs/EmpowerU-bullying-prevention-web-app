import { useSelector } from "react-redux";
import "./Navigation.css";

export default function Navigation({ navBarStyle, children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className="nav-box">
      <img
        className="logo"
        src="/logo.png"
        alt="A logo consisting of a shield with a heart in the middle of it."
      />
      <nav className={isAuthenticated ? "authenticated" : undefined}>
        {children}
      </nav>
    </header>
  );
}
