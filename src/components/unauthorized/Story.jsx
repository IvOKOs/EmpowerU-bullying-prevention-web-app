import "./Story.css";

export default function Story({ text, image, imgPosition }) {
  return (
    <article className={`story-box ${imgPosition}`}>
      <img className="story-img" src={image} alt={text} />
      <p className="story-text">{text}</p>
    </article>
  );
}
