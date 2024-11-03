import "./FeaturesCard.css";
import check from "../../assets/check.png";

export default function FeaturesCard({
  imgSource,
  altText,
  title,
  descriptions,
}) {
  return (
    <article className="card">
      <img className="card-icon" src={imgSource} alt={altText} />
      <div className="card-text-box">
        <p className="card-title">{title}</p>
        {descriptions.map((description) => {
          return (
            <div key={description.id} className="features-descr-box">
              <img className="check" src={check} alt="A checkmark." />
              <p className="feature-description">{description.featureInto}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
}

// <a
// href="https://www.flaticon.com/free-icons/literature"
// title="literature icons"
// >
// Literature icons created by smashingstocks - Flaticon
// </a>

/* <a href="https://www.flaticon.com/free-icons/team-building" title="team building icons">Team building icons created by gravisio - Flaticon</a> */

/* <a href="https://www.flaticon.com/free-icons/message" title="message icons">Message icons created by smashingstocks - Flaticon</a> */

/* <a href="https://www.flaticon.com/free-icons/confirm" title="confirm icons">Confirm icons created by hqrloveq - Flaticon</a> */
