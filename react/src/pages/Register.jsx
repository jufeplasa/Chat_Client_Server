import styles from "../styles/Register.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, contact, creditcard, password, confirmPassword } =
      formData;
    console.log("Email: ", email);
    console.log("Username: ", username);
    console.log("Contact: ", contact);
    console.log("Credit Card: ", creditcard);
    console.log("Password: ", password);
    console.log("Confirm Password: ", confirmPassword);
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
