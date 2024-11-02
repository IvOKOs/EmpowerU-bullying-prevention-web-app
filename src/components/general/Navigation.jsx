import "./Navigation.css";

export default function Navigation({ navBarStyle, children }) {
  return (
    <header className={`nav-box ${navBarStyle}`}>
      <img
        className="logo"
        src="/logo.png"
        alt="A logo consisting of a shield with a heart in the middle of it."
      />
      <nav>{children}</nav>
    </header>
  );
}
