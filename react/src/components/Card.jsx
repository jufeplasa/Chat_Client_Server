import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Placeholder from "/src/assets/image-placeholder.jpeg";
import PropTypes from "prop-types";

function Card({ name, price, labels }) {
  return (
    <div className="card">
      <img src={Placeholder} alt="Article Image" />
      <div className="card-body">
        <div className="card-bodyTitles">
          <div>
            <h4>{name}</h4>
            <p>{price}</p>
          </div>
          <ShoppingCartIcon
            style={{ width: "16px", height: "16px" }}
            aria-hidden="true"
          />
        </div>
        {labels && (
          <div className="labels">
            {labels.split(",").map((label) => (
              <span key={label} className="label">
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  labels: PropTypes.string,
};

export default Card;
