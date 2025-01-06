import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.mainBox}>
      <div className={`${styles.containerBox} grid grid--3-cols`}>
        <div className={styles.mainInfo}>
          <div className={styles.greetingBox}>
            <img className={styles.profilePic} />
            <header>Welcome back!</header>
          </div>
          <p className={styles.affirmation}>Affirmation</p>
        </div>

        <div className={styles.meterHelpBox}>
          <div className={styles.meterBox}>
            <div className={styles.meter}>
              <div className={styles.meterFill}></div>
            </div>
            <span className={styles.meterTasks}>0/3</span>
          </div>
          <div className={styles.helpBox}>
            <img />
            <span>sgsgsgwgergr</span>
          </div>
        </div>
      </div>
    </div>
  );
}
