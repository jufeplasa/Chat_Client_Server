import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <h1>Home</h1>;
}

export default Home;
