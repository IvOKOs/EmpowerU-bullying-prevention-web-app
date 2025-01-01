import styles from "./Login.module.css";
import groupHug from "../../assets/group-hug.png";
import { Link } from "react-router-dom";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

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
        <form className={styles.contentBox} onSubmit={handleSubmit}>
          <div className={styles.formInputs}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email..."
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Enter your password..."
            />
            <button className={styles.btn}>Let me in!</button>
          </div>
          <img
            className={styles.groupHug}
            src={groupHug}
            alt="A boy and a girl cheerfully waving at the user."
          />
        </form>
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
