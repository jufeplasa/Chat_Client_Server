import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  HomeIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

function Nav({ activeName }) {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          {activeName === "home" ? (
            <a onClick={() => navigate("/")} className="active">
              <HomeIcon
                style={{ width: "20px", height: "20px" }}
                aria-hidden="true"
              />
              Home
            </a>
          ) : (
            <a onClick={() => navigate("/")}>
              <HomeIcon
                style={{ width: "20px", height: "20px" }}
                aria-hidden="true"
              />
              Home
            </a>
          )}
        </li>
        <li>
          {activeName === "purchase" ? (
            <a onClick={() => navigate("/purchase")} className="active">
              <ShoppingCartIcon
                style={{ width: "20px", height: "20px" }}
                aria-hidden="true"
              />
              Purchases
            </a>
          ) : (
            <a onClick={() => navigate("/purchase")}>
              <ShoppingCartIcon
                style={{ width: "20px", height: "20px" }}
                aria-hidden="true"
              />
              Purchases
            </a>
          )}
        </li>
        <li>
          {activeName === "cart" ? (
            <a onClick={() => navigate("/cart")} className="active">
              <ShoppingBagIcon
                style={{ width: "20px", height: "20px" }}
                aria-hidden="true"
              />
              Cart
            </a>
          ) : (
            <a onClick={() => navigate("/cart")}>
              <ShoppingBagIcon
                style={{ width: "20px", height: "20px" }}
                aria-hidden="true"
              />
              Cart
            </a>
          )}
        </li>
        <li>
          {activeName === "article" ? (
            <a onClick={() => navigate("/article")} className="active">
              <PlusCircleIcon
                style={{ width: "20px", height: "20px" }}
                aria-hidden="true"
              />
              Add article
            </a>
          ) : (
            <a onClick={() => navigate("/article")}>
              <PlusCircleIcon
                style={{ width: "20px", height: "20px" }}
                aria-hidden="true"
              />
              Add article
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  activeName: PropTypes.string,
};

export default Nav;
