import "./Hero.css";
import boy from "../../assets/boy-standing.png";
import kids_helping from "../../assets/kids-helping.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="main-info-box">
        <div className="hero-box">
          <img
            className="kids-helping-img"
            src={kids_helping}
            alt="A girl sitting on the ground and a boy next to her extending his hand towards her offering help."
          />
          <div className="title-box">
            <h1 className="title">EmpowerU</h1>
            <p className="description">
              An interactive web app designed to help you stand against
              bullying!
            </p>
          </div>
          <img
            className="boy-img"
            src={boy}
            alt="A standing cheerful boy with crossed arms looking at the user."
          />
        </div>
        <Link to="/dashboard" className="hero-btn">
          Help yourself!
        </Link>
      </div>
    </section>
  );
}
