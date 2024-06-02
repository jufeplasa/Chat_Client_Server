import { saveAuth } from "../redux/slices/authSlice";
//import { axiosI } from "../configs/axiosConfig";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    //const response = await axiosI
    //  .post("/login", formData)
    //  .catch((error) => error.response);
    const response = { data: "Ok" };
    if (response.data === "Ok") {
      await Swal.fire({
        title: "Success!",
        text: "Login successful! Redirecting to home page",
        showConfirmButton: false,
        icon: "success",
        timer: 2000,
      });
      dispatch(saveAuth({ token: formData.email }));
      navigate("/");
    } else {
      await Swal.fire({
        title: "Oops!",
        text: `${response.data}`,
        showConfirmButton: false,
        icon: "error",
        timer: 2000,
      });
    }
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
