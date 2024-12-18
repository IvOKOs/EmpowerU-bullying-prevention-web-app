export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <article className="register-box">
      <div className="register-intro-box">
        <img
          src="/logo.png"
          alt="A logo consisting of a shield with a heart in the middle of it."
        />
        <header>Join our supportive community</header>
        <p>Get Started!</p>
      </div>
      <div className="content-grid">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your unique username..." />
          <input type="email" />
          <div>
            <input type="password" />
          </div>
          <div>
            <input type="password" />
          </div>
          <div className="guidelines-check-box">
            <input type="checkbox" />
            <label>
              I pinky promise to follow the community guidelines and be awesome!
            </label>
          </div>
        </form>
        <img />
      </div>
    </article>
  );
}
