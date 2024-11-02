import "./App.css";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import Navigation from "./components/general/Navigation";

function App() {
  return (
    <>
      <Navigation navBarStyle="unauthorized">
        <div className="auth-box">
          <button>Sign Up</button>
          <p>/</p>
          <button>Log In</button>
        </div>
      </Navigation>
      <UnauthorizedPage />
    </>
  );
}

export default App;
