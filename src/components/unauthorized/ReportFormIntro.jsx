import { useEffect } from "react";
import "./ReportFormIntro.css";
import { useState } from "react";

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
        <p>Together, we can fight back!</p>
        <div class="notebook-page">
          <div className="holes">
            {holes.map((_, index) => (
              <div key={index} className="hole"></div>
            ))}
          </div>
          <div class="content">
            <p>Dear Reporting Form</p>
            <br />
            Today, someone pushed me during lunch, and it hurt my feelings. This
            is where I can tell someone who will help. Thank you, Alex
          </div>
        </div>
      </div>
    </section>
  );
}
