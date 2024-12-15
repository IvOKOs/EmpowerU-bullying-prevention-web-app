import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="notifications-box container-md">
        <p className="question">
          You wanna receive helpful tips and tricks that will empower U?
        </p>
        <p>
          &rarr; No problem! Just enter your email address below and we'll be
          sending you a useful tip every Saturday morning. 😉
        </p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button className="footer-btn" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="links-container">
        <div className="links-grid">
          <div className="copyright">
            <span className="copyright-symbol">&copy;</span>2024 EmpowerU
          </div>
          <div className="policies">
            <a className="policy" href="/">
              Policy
            </a>
            <a className="terms" href="/">
              Terms of Service
            </a>
          </div>
          <div className="logos">
            <a href="/">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="/">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
