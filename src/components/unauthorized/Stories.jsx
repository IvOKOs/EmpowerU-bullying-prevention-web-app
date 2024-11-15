import "./Stories.css";
import Story from "./Story";

import girl_butterfly from "../../assets/girl-butterfly.png";
import boy_phone from "../../assets/boy-browse-phone.png";
import girl_climb from "../../assets/girl-climbing.png";

const usersTexts = [
  {
    id: 1,
    text: "With our app, every journey starts with self-discovery. Explore helpful resources that empower you to grow and transform, just like the girl who found her wings. Your path to a brighter, more confident you begins here.",
    image: girl_butterfly,
  },
  {
    id: 2,
    text: "You are never alone on this journey. Connect with a supportive community that understands you, just like the boy who found friendship and encouragement. Share your story, receive uplifting messages, and discover a place where you truly belong",
    image: boy_phone,
  },
  {
    id: 3,
    text: "Face every challenge with renewed strength. Our app offers the tools and support you need to overcome obstacles, just like the girl who climbed her way to new heights. Build resilience, gain confidence, and celebrate every victory along the way.",
    image: girl_climb,
  },
];

export default function Stories() {
  return (
    <section>
      <div className="container stories-main-box">
        <div className="stories-text-box">
          <header>Rise, Connect, Thrive</header>
          <p>
            Every journey to transformation, connection, and strength is unique.
            Your journey begins now — all it takes is the first step.
          </p>
        </div>
        <div className="stories-box">
          {usersTexts.map((userText) => (
            <Story text={userText.text} image={userText.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
