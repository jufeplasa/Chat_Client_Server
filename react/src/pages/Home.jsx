import { Card, Recent, SideBar } from "../components";
import UserIcon from "/src/assets/user-icon.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <div className="container">
      <SideBar activeName={"home"} />
      <main className="content">
        <header className="header">
          <h1>Home</h1>
          <img src={UserIcon} />
        </header>
        <div className="shop">
          <div className="shop-header">
            <div className="shop-popular">
              <h3>Most popular</h3>
              <div className="popular-cards">
                <Card />
                <Card />
              </div>
            </div>
            <div className="shop-popular">
              <h3>Recent Purchases</h3>
              <Recent />
            </div>
          </div>
          <div className="shop-new">
            <h3>New</h3>
            <div className="shop-new-cards">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
