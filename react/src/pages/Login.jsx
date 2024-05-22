import styles from "../styles/Login.module.css";
import { axiosI } from "../configs/axiosConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    console.log("Email: ", email);
    console.log("Password: ", password);
    await axiosI.post("/login", formData);
  };
  return (
    <section className={styles.loginContainer}>
      <form className={styles.signInForm} onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Enter email or user name"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="current-password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="link-text">
          If you dont have an account register <br />
          You can <a onClick={() => navigate("/register")}>Register here!</a>
        </div>
      </form>
    </section>
  );
}

export default Login;
