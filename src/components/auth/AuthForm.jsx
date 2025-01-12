import styles from "./AuthForm.module.css";
import greetingKids from "../../assets/greeting-kids.png";
import groupHug from "../../assets/group-hug.png";

export default function AuthForm({ isKidRole = false, isRegister }) {
  let content;
  if (isKidRole && isRegister) {
    content = (
      <>
        <input
          className={styles.inputReg}
          type="text"
          placeholder="Enter your unique username..."
        />
        <input
          className={styles.inputReg}
          type="email"
          placeholder="Enter your email..."
        />
        <div className={styles.nameBox}>
          <div className={styles.nameInputBox}>
            <input
              className={styles.inputReg}
              type="text"
              placeholder="Enter your name..."
            />
            <div className={styles.infoBox}>
              <span className={styles.tooltip}>
                Your name will only be visible to you on your profile page. No
                one else can see it. 😉
              </span>
              <span className={styles.question}>?</span>
            </div>
          </div>
          <p>(Optional)</p>
        </div>
        <div className={styles.passBox}>
          <input
            className={styles.inputReg}
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
            className={styles.inputReg}
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
      </>
    );
  } else if (!isKidRole && isRegister) {
    content = (
      <>
        <input
          className={styles.inputReg}
          type="text"
          placeholder="Enter your name..."
        />
        <input
          className={styles.inputReg}
          type="email"
          placeholder="Enter your email..."
        />
        <div className={styles.passBox}>
          <input
            className={styles.inputReg}
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
            className={styles.inputReg}
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
      </>
    );
  } else {
    content = (
      <>
        <input
          className={styles.inputLogin}
          type="email"
          placeholder="Enter your email..."
        />
        <input
          className={styles.inputLogin}
          type="password"
          placeholder="Enter your password..."
        />
        <button className={styles.btnLogin}>Let me in!</button>
      </>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.contentGrid} onSubmit={handleSubmit}>
      <div
        className={
          isRegister ? styles.formRegisterInputs : styles.formLoginInputs
        }
      >
        {content}
      </div>
      <img
        className={isRegister ? styles.greetingKids : styles.groupHug}
        src={isRegister ? greetingKids : groupHug}
        alt={
          isRegister
            ? "A boy and a girl cheerfully waving at the user."
            : "Two boys and one girl hugged and smiling and looking at the user."
        }
      />
      {isRegister && (
        <>
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
          <button className={styles.btnReg}>
            {isKidRole ? "Let's Do This!" : "Let's Begin!"}
          </button>
        </>
      )}
    </form>
  );
}
