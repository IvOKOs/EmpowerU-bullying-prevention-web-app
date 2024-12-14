import { useEffect } from "react";
import "./ReportFormIntro.css";
import { useState } from "react";
import confidentGirl from "../../assets/confident-girl.png";
import pencil from "../../assets/pencil.png";

export default function ReportFormIntro() {
  const [holes, setHoles] = useState([]);

  useEffect(() => {
    const updateHoles = () => {
      const containerHeight =
        document.querySelector(".notebook-page").offsetHeight;
      const holeSize = 20; // height of each hole + margin
      const numberOfHoles = Math.floor(containerHeight / holeSize);

      const newHoles = [...Array(numberOfHoles).keys()];
      setHoles(newHoles); // update state
    };

    updateHoles();
    window.addEventListener("resize", updateHoles); // update on resize

    return () => {
      window.removeEventListener("resize", updateHoles); // cleanup on unmount
    };
  }, []);

  return (
    <section className="report-intro-section">
      <div className="container-md">
        <header className="form-title">Report Incidents Anonymously</header>
        <p className="form-text">
          If you witness or experience bullying, our anonymous reporting tool
          allows you to share what happened without revealing your identity.
        </p>
        <p className="form-text">Together, we can fight back!</p>
      </div>

      <div className="content-grid">
        <img className="girl-img" src={confidentGirl} alt="" />
        <div class="notebook-page">
          <div className="holes">
            {holes.map((_, index) => (
              <div key={index} className="hole"></div>
            ))}
          </div>
          <div class="content">
            <p>Dear Friend, 👋</p>
            <br />
            <p>
              I saw something at school today that made me feel really sad… 😔
              There was a kid being bullied, and it wasn’t right. So, I wanted
              to tell someone but in a safe way, just like this!
            </p>
            <br />
            <p>Here’s how I did it:</p>
            <br />
            <ol>
              <li>
                <p>
                  <strong>What happened?</strong>
                </p>
                <p>
                  I wrote down what I saw. It can be anything like mean words,
                  pushing, or even online stuff. There are some checkboxes to
                  help you pick the right one. I chose{" "}
                  <span className="marked-word">verbal bullying</span> because
                  they were saying mean things. 📢
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>Where did it happen?</strong>
                </p>
                <p>
                  I told them where it happened, like in the school hallway or
                  playground. I just clicked on the place that matched. I picked
                  <span className="marked-word">classroom</span>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>Who saw it? 👀</strong>
                  (This part is extra but helpful!)
                </p>
                <p>
                  I added names of other kids who saw it, just in case they can
                  help too! It’s okay if you don’t know their names.
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>How bad was it?</strong>
                </p>
                <p>
                  There’s a part where you can say how serious it was, like if
                  it was a little mean or super hurtful. I chose{" "}
                  <span className="marked-word">pretty serious</span>. 😟
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>Extra stuff</strong>
                </p>
                <p>
                  If you want, you can write more things that you think are
                  important. I told them how the bully always does this to the
                  same kid.
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>Your Secret is Safe! 🔒</strong>
                </p>
                <p>
                  Don’t worry, nobody will know it’s you. I promise! Just hit
                  the “Submit” button when you’re done, and you’re helping
                  someone/yourself out.
                </p>
              </li>
            </ol>
            <br />
            <br />
            <p>Thanks for being brave and kind!</p>
            <br />
            <p>Love,</p>
            <p>A Friend 🧡</p>
          </div>
        </div>
        <img className="pencil" src={pencil} alt="" />
      </div>
    </section>
  );
}
