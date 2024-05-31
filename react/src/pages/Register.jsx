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
  const [message, setMessage] = useState(''); // Añadir estado para manejar el mensaje

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, username, contact, creditcard, password, confirmPassword } = formData;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    const userData = {
      email: email,
      username: username,
      contact: contact ,
      creditCard: creditcard,
      password: password
    };

    try {
      const response = await fetch('http://localhost:3000/users/client/', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

      const data = await response.json;

      if (response.ok) {
        setMessage('Registration successful!');
        // Navegar a otra página si el registro es exitoso
        navigate('/login');
      } else {
        setMessage(`Registration failed: ${data}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again. '+error);
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
        {message && <p>{message}</p>} {/* Mostrar el mensaje */}
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
