import "./Empathy.css";
import sad_kid from "../../assets/sad-kid.png";

export default function Empathy() {
  return (
    <section className="empathy-section">
      <div className="content-box container grid grid--3-cols">
        <p className="first-text">You are NOT alone...</p>
        <div className="video-box">
          <iframe
            width="660"
            height="340"
            src="https://www.youtube.com/embed/tJsGGsPNakw?si=2QFHuixy2A6sFoV_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <img
          className="sad-kid"
          src={sad_kid}
          alt="A sad boy sitting on the ground, wrapped his arms around his legs and crying."
        />
        <p className="second-text">...together we can make a difference!</p>
      </div>
    </section>
  );
}
