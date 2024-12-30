import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const InputField = ({ label, type, value, onChange, error, placeholder }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <span className="error">{error}</span>}
  </div>
);

const Login = () => {
  const navigate = useNavigate(); // Move this inside the Login component
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormValues({ ...formValues, [field]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    const newErrors = {};

    if (!registeredUser) {
      newErrors.email = "No account exists. Please register first.";
      newErrors.password = "No account exists. Please register first.";
    } else {
      if (registeredUser.email !== formValues.email) {
        newErrors.email = "Email does not match our records.";
      }
      if (registeredUser.password !== formValues.password) {
        newErrors.password = "Password is incorrect.";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login successful!");
      navigate("/HomePage"); // Navigate to the dashboard or another page
      // navigate("/CartPage", { state: { userName: registeredUser.name } }); // Navigate to the dashboard or another page
    } else {
      alert("Invalid credentials. Check your registration details.");
    }
  };

  return (
    <div className="loginpage-container">
      <div className="form">
        <h1>Login Page</h1>
        <form onSubmit={handleSignIn}>
          <InputField
            label="Email:"
            type="email"
            value={formValues.email}
            onChange={handleChange("email")}
            error={hasSubmitted && errors.email}
            placeholder="Enter Email"
          />
          <InputField
            label="Password:"
            type="password"
            value={formValues.password}
            onChange={handleChange("password")}
            error={hasSubmitted && errors.password}
            placeholder="Enter Password"
          />
          <button type="submit" className="signin-button">
            Login
          </button>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
