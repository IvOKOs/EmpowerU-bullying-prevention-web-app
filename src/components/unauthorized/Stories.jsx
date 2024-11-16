import "./Stories.css";
import Story from "./Story";
import { usersTexts } from "../../data/TextData";

export default function Stories() {
  return (
    <section className="stories-section">
      <div className="container stories-main-box">
        <div className="stories-text-box">
          <header className="stories-title">Rise, Connect, Thrive</header>
          <p className="stories-sub-text">
            Every journey to transformation, connection, and strength is unique.
            Your journey begins now — all it takes is the first step.
          </p>
        </div>
        <div className="stories-box">
          {usersTexts.map((userText, index) => (
            <Story
              key={userText.id}
              text={userText.text}
              image={userText.image}
              imgPosition={(index + 1) % 2 === 0 ? "right" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
