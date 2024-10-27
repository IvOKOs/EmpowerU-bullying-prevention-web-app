import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <header></header>
      <div className="main-info-box">
        <div className="hero-box">
          <img className="kids-helping-img" />
          <div className="title-box">
            <h1>EmpowerU</h1>
            <p>
              An interactive web app designed to help you fight against
              bullying!
            </p>
          </div>
          <img className="boy-img" />
        </div>
        <button>Help yourself!</button>
      </div>
    </section>
  );
}
