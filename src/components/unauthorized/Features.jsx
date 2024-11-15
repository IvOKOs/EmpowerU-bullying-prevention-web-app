import "./Features.css";
import FeaturesCard from "../general/FeaturesCard";
import book from "../../assets/book.png";
import group from "../../assets/team-building.png";
import chat from "../../assets/chat.png";
// this below should be extracted into a TextResources file and imported into this file
const resourcesDescriptions = [
  {
    id: 1,
    featureInto:
      "Browse articles, videos, and tips that can help you understand and deal with bullying.",
  },
  { id: 2, featureInto: "Learn how to stay strong and feel supported." },
];

const communityDescriptions = [
  {
    id: 1,
    featureInto: "Connect with others who understand.",
  },
  {
    id: 2,
    featureInto:
      "Share your story, offer support, or just chat with people who have been there too.",
  },
];

const scenariosDescriptions = [
  {
    id: 1,
    featureInto:
      "Practice standing up for yourself in safe, interactive role-play scenarios.",
  },
  { id: 2, featureInto: "Build confidence in a fun way." },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-box container grid grid--3-cols">
        <div className="intro-features-box">
          <p className="intro-features-text">
            Explore the features designed to support your journey.
          </p>
          <p className="intro-features-text">
            Each of these tools helps you grow stronger and more confident.
          </p>
        </div>

        <FeaturesCard
          imgSource={book}
          altText="A book icon."
          title="Helpful Resources"
          descriptions={resourcesDescriptions}
        />
        <FeaturesCard
          imgSource={group}
          altText="A group of people icon."
          title="Community Support"
          descriptions={communityDescriptions}
        />
        <FeaturesCard
          imgSource={chat}
          altText="A chat bubble icon."
          title="Interactive Scenarios"
          descriptions={scenariosDescriptions}
        />
      </div>
    </section>
  );
}
