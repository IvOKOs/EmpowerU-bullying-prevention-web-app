export default function Story({ text, image, imgPosition }) {
  return (
    <article className="story-box">
      <div>
        <img src={image} />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </article>
  );
}
