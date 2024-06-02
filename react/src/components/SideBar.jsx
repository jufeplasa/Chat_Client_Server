import {
  EnvelopeIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { clearAuth } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "/src/assets/Logo.png";
import { Nav } from "../components";
import PropTypes from "prop-types";

function SideBar({ activeName }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearAuth());
    navigate("/login");
  };
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={Logo} />
      </div>
      <Nav activeName={activeName} />
      <div className="sidebar-footer">
        <a>
          <EnvelopeIcon
            style={{ width: "20px", height: "20px" }}
            aria-hidden="true"
          />
          Help
        </a>
        <a onClick={handleLogout}>
          <ArrowLeftEndOnRectangleIcon
            style={{ width: "20px", height: "20px" }}
            aria-hidden="true"
          />
          Logout
        </a>
      </div>
    </aside>
  );
}

SideBar.propTypes = {
  activeName: PropTypes.string,
};

export default SideBar;
