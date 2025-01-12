import styles from "./Register.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

export default function Register() {
  const [isKidRole, setIsKidRole] = useState(true);

  return (
    <div className={styles.box}>
      <article className={styles.registerBox}>
        <div className={styles.registerIntroBox}>
          <img
            className={styles.logo}
            src="/logo.png"
            alt="A logo consisting of a shield with a heart in the middle of it."
          />
          <header className={styles.title}>
            Join our supportive community
          </header>
        </div>
        <div className={styles.roleBox}>
          <p>I am a...</p>
          <div className={styles.rolesFlexBox}>
            <div
              onClick={() => setIsKidRole(true)}
              className={`${styles.role} ${isKidRole ? styles.roleActive : ""}`}
            >
              kid/teen
            </div>
            <div
              onClick={() => setIsKidRole(false)}
              className={`${styles.role} ${isKidRole ? "" : styles.roleActive}`}
            >
              parent
            </div>
          </div>
        </div>
        <AuthForm isKidRole={isKidRole} isRegister={true} />
        <div className={styles.linksBox}>
          <p className={styles.loginTitle}>Already have an account?</p>
          <p>
            Welcome back{isKidRole ? ", hero! " : "! "}
            <Link to="/login">Click here to log-in.</Link>
          </p>
        </div>
      </article>
    </div>
  );
}
