import styles from "../styles/Register.module.css";
import { axiosI } from "../configs/axiosConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    contact: "",
    creditcard: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, username, contact, creditcard, password, confirmPassword } =
      formData;

    if (password !== confirmPassword) {
      await Swal.fire({
        title: "Oops!",
        text: "Las contraseñas no coinciden!",
        showConfirmButton: false,
        icon: "error",
        timer: 2000,
      });
    } else {
      const userData = {
        email: email,
        username: username,
        contact: contact,
        creditCard: creditcard,
        password: password,
      };
      registerUser(userData);
    }
  };
  const registerUser = async (userData) => {
    const response = await axiosI
      .post("/users/client/", userData)
      .catch((error) => error.response);
    if (
      response.data === "Error, el correo ya se encuentra registrado." ||
      response.data === "Error, el usuario ya se encuentra en uso."
    ) {
      await Swal.fire({
        title: "Oops!",
        text: `${response.data}`,
        showConfirmButton: false,
        icon: "error",
        timer: 2000,
      });
    } else {
      await Swal.fire({
        title: "Success!",
        text: "User registered successfully!",
        showConfirmButton: false,
        icon: "success",
        timer: 2000,
      });
      navigate("/login");
    }
  };
  return (
    <section className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className={styles.formTwoColumns}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Enter Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              placeholder="Create User name"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.formTwoColumns}>
          <div className="form-group">
            <input
              type="text"
              id="contact"
              name="contact"
              autoComplete="contact"
              placeholder="Contact number"
              required
              value={formData.contact}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="creditcard"
              name="creditcard"
              autoComplete="creditcard"
              placeholder="Credit Card number"
              required
              value={formData.creditcard}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.formTwoColumns}>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <div className="link-text">
          If you already have an account
          <br />
          You can <a onClick={() => navigate("/login")}>Login here!</a>
        </div>
      </form>
    </section>
  );
}

export default Register;
