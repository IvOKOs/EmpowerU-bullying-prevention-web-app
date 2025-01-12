import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

export default function Login() {
  return (
    <div className={styles.box}>
      <article className={styles.loginBox}>
        <div className={styles.loginIntroBox}>
          <img
            className={styles.logo}
            src="/logo.png"
            alt="A logo consisting of a shield with a heart in the middle of it."
          />
          <header className={styles.title}>Welcome back!</header>
        </div>
        <AuthForm isRegister={false} />
        <div className={styles.linksBox}>
          <div className={styles.recoveryBox}>
            <p className={styles.recoveryTitle}>Forgot your password?</p>
            <p>
              No worries - <Link to="/">Click here.</Link>
            </p>
          </div>
          <div className={styles.recoveryBox}>
            <p className={styles.recoveryTitle}>New here?</p>
            <Link to="/register">Join the adventure!</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
