import styles from "./Dashboard.module.css";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import meadows from "../assets/meadows.png";
import nerdyGirl from "../assets/nerdy-girl.png";
import peekingGirl from "../assets/peeking-girl.png";
import { useState } from "react";

export default function Dashboard() {
  const [hover, setHover] = useState({
    isHovered: false,
    isHovering: false,
  });

  function handleHovered() {
    setHover((prevHover) => {
      const currHover = {
        ...prevHover,
        isHovered: true,
      };
      return currHover;
    });
  }

  function handleHovering() {
    setHover((prevHover) => {
      const currHover = {
        ...prevHover,
        isHovering: true,
      };
      return currHover;
    });
  }

  function handleMouseLeave() {
    setHover({ isHovered: false, isHovering: false });
  }

  return (
    <div className={styles.mainBox}>
      <div className={`${styles.containerBox} grid grid--3-cols grid--4-rows`}>
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
            onMouseEnter={handleHovered}
            onMouseOver={handleHovering}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className={styles.nerdyGirl}
              src={nerdyGirl}
              alt="A nerdy-looking girl with glasses sitting on the ground and holding a book while looking at the user."
            />
            <span
              role="tooltip"
              className={`${styles.speechBubble} ${
                hover.isHovered ? styles.expandBounce : styles.shrink
              } ${hover.isHovering ? styles.hovering : ""}`}
            >
              Are you having trouble navigating? Click on me and I will try to
              help!
            </span>
          </div>
        </div>

        {/* add shadow box on all boxes */}
        <div className={styles.resourcesContainer}>
          <span>My resources</span>
          {/* here will be the 3 most recently saved resources */}
          <div className={styles.resourcesBox}></div>
          {/* onClick opens a modal of all saved resources */}
        </div>

        {/* onClick opens a modal which is the journal consisting of a textarea element */}
        <div className={styles.journalBox}>
          <span>My journal</span>
          Thought of the day is... or emotion of the day is... you can write
          about anything here...
        </div>

        <div className={styles.supportActionsBox}>
          <span>My support actions</span>
          <div className={styles.actionBox}>
            You've helped 8 people by reporting incidents!
          </div>
        </div>

        <div className={styles.factsContainer}>
          <div className={styles.factsBox}>
            <p className={styles.factsTitle}>Fun Fact!</p>
            <div className={styles.fact}></div>
            <div></div>
          </div>
        </div>

        <div className={styles.activityContainer}>
          <span>Recent activity</span>
        </div>
        <img
          className={styles.peekingGirl}
          src={peekingGirl}
          alt="A young blonde girl with soft freckles and blue eyes, peeking curiously from behind a tree. Her wide, innocent eyes are focused directly on the viewer, radiating a sense of wonder and playfulness."
        />
        <img className={styles.cloud1} src={cloud1} alt="A cloud." />
        <img className={styles.cloud2} src={cloud2} alt="A cloud." />
      </div>
      <img
        className={styles.meadows}
        src={meadows}
        alt="A serene and expansive meadow with vibrant green grass, scattered with colorful wildflowers like daisies, poppies, and lavender."
      />
    </div>
  );
}
