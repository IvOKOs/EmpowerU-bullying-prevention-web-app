import styles from "./Dashboard.module.css";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import meadows from "../assets/meadows.png";
import nerdyGirl from "../assets/nerdy-girl.png";
import peekingGirl from "../assets/peeking-girl.png";
import { useState } from "react";

export default function Dashboard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  // add border around the meter!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
          <div
            className={styles.helpBox}
            onMouseEnter={() => setIsHovered(true)}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsHovering(false);
            }}
          >
            <img
              className={styles.nerdyGirl}
              src={nerdyGirl}
              alt="A nerdy-looking girl with glasses sitting on the ground and holding a book while looking at the user."
            />
            <span
              className={`${styles.speechBubble} ${
                isHovered ? styles.expandBounce : styles.shrink
              } ${isHovering ? styles.hovering : ""}`}
            >
              Are you having trouble navigating? Click on me and I will try to
              help!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
