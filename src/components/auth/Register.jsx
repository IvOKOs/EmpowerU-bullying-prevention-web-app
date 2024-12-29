import styles from "./Register.module.css";
import greetingKids from "../../assets/greeting-kids.png";
import { useState } from "react";

export default function Register() {
  const [isKidRole, setIsKidRole] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const formContent = isKidRole ? (
    <div className={styles.formInputs}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your unique username..."
      />
      <input
        className={styles.input}
        type="email"
        placeholder="Enter your email..."
      />
      <div className={styles.nameBox}>
        <div className={styles.nameInputBox}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your name..."
          />
          <div className={styles.infoBox}>
            <span className={styles.tooltip}>
              Your name will only be visible to you on your profile page. No one
              else can see it. 😉
            </span>
            <span className={styles.question}>?</span>
          </div>
        </div>
        <p>(Optional)</p>
      </div>
      <div className={styles.passBox}>
        <input
          className={styles.input}
          type="password"
          placeholder="Enter your password..."
        />
        <div className={styles.infoBox}>
          <span className={styles.tooltip}>
            To keep your account super safe, pick a password that's at least 8
            characters long. 🔒😊
          </span>
          <span className={styles.question}>?</span>
        </div>
      </div>
      <div className={styles.passBox}>
        <input
          className={styles.input}
          type="password"
          placeholder="Re-enter your password..."
        />
        <div className={styles.infoBox}>
          <span className={styles.tooltip}>
            Just making sure you're not a sneaky robot. 🤖
          </span>
          <span className={styles.question}>?</span>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.formInputs}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your name..."
      />
      <input
        className={styles.input}
        type="email"
        placeholder="Enter your email..."
      />
      <div className={styles.passBox}>
        <input
          className={styles.input}
          type="password"
          placeholder="Enter your password..."
        />
        <div className={styles.infoBox}>
          <span className={styles.tooltip}>
            To keep your account safe, pick a password that's at least 8
            characters long.
          </span>
          <span className={styles.question}>?</span>
        </div>
      </div>
      <div className={styles.passBox}>
        <input
          className={styles.input}
          type="password"
          placeholder="Re-enter your password..."
        />
        <div className={styles.infoBox}>
          <span className={styles.tooltip}>
            Just making sure you're not a robot.
          </span>
          <span className={styles.question}>?</span>
        </div>
      </div>
    </div>
  );

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
        <form className={styles.contentGrid} onSubmit={handleSubmit}>
          {formContent}
          <img
            className={styles.greetingKids}
            src={greetingKids}
            alt="A boy and a girl cheerfully waving at the user."
          />
          <div className={styles.guidelinesBox}>
            <div className={styles.guidelinesCheckBox}>
              <input type="checkbox" />
              <label>
                I {isKidRole ? "pinky" : ""} promise to follow the{" "}
                <a href="/">community guidelines</a>
                {isKidRole ? " and be awesome!" : "."}
              </label>
            </div>
            <p>
              {isKidRole
                ? `(Your secrets are safe with us! We're like ninjas for your privacy
              - swift, silent and super secure.)`
                : ""}
            </p>
          </div>
          <button className={styles.btn}>
            {isKidRole ? "Let's Do This!" : "Let's Begin!"}
          </button>
        </form>
        <div className={styles.recoveryBox}>
          <p className={styles.recoveryTitle}>Already have an account?</p>
          <p>
            Welcome back{isKidRole ? ", hero! " : "! "}
            <a href="/">Click here to log-in.</a>
          </p>
        </div>
        {/* <div className={styles.recoveryBox}>
          <p className={styles.recoveryTitle}>Forgot password?</p>
          <p>No worries - we've got your back!</p>
          <a href="/">Recover it here.</a>
        </div> */}
      </article>
    </div>
  );
}
