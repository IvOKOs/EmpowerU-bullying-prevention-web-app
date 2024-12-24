import styles from "./Register.module.css";
import greetingKids from "../../assets/greeting-kids.png";

export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(":)");
  }

  return (
    <article className={styles.registerBox}>
      <div className={styles.registerIntroBox}>
        <img
          className={styles.logo}
          src="/logo.png"
          alt="A logo consisting of a shield with a heart in the middle of it."
        />
        <header className={styles.title}>Join our supportive community</header>
        {/* <p className={styles.subTitle}>Get Started!</p> */}
      </div>
      <form className={styles.contentGrid} onSubmit={handleSubmit}>
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
              <span className={styles.question}>?</span>
            </div>
            <p>(Optional)</p>
          </div>
          <div className={styles.passBox}>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter your password..."
            />
            <span className={styles.question}>?</span>
          </div>
          <div className={styles.passBox}>
            <input
              className={styles.input}
              type="password"
              placeholder="Re-enter your password..."
            />
            <span className={styles.question}>?</span>
          </div>
        </div>
        <img
          className={styles.greetingKids}
          src={greetingKids}
          alt="A boy and a girl cheerfully waving at the user."
        />
        <div className={styles.guidelinesBox}>
          <div className={styles.guidelinesCheckBox}>
            <input type="checkbox" />
            <label>
              I pinky promise to follow the <a href="/">community guidelines</a>{" "}
              and be awesome!
            </label>
          </div>
          <p>
            (Your secrets are safe with us! We're like ninjas for your privacy -
            swift, silent and super secure.)
          </p>
        </div>
        <button className={styles.btn}>Let's Do This!</button>
      </form>
      <div className={styles.recoveryContentBox}>
        <div className={styles.recoveryBox}>
          <p className={styles.recoveryTitle}>Already have an account?</p>
          <p>Welcome back, hero!</p>
          <a href="/">Click here to log-in.</a>
        </div>
        <div className={styles.recoveryBox}>
          <p className={styles.recoveryTitle}>Forgot password?</p>
          <p>No worries - we've got your back!</p>
          <a href="/">Recover it here.</a>
        </div>
      </div>
    </article>
  );
}
