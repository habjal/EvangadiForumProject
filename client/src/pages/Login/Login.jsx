import React, { useState } from "react";
import axios from "axios";
import classes from "./login.module.css";

function Login({ onSwitch }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5173/api/users/Login",
        {
          email: formData.email,
          Password: formData.password,
        }
      );

      if (response.status === 200) {
        setSuccess("Login successful! Redirecting...");
        setError(null);
      } else {
        setError(response.data.msg || "Login failed.");
        setSuccess(null);
      }
    } catch (err) {
      setError(
        err.response?.data?.msg || "Error logging in. Please try again."
      );
      setSuccess(null);
    }
  };

  return (
    <div className={classes.formcontainer}>
      <h2>Login to your account</h2>
      <p className={classes.signuptext}>
        Don't have an account?{" "}
        <a
          onClick={onSwitch}
          style={{ cursor: "pointer", color: "var(--primary-color)" }}
        >
          create a new account
        </a>
      </p>
      {error && (
        <p className={classes.error} style={{ marginBottom: "10px" }}>
          {error}
        </p>
      )}{" "}
      {/* Display error message */}
      {success && <p className={classes.success}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className={classes.passwordinput}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? "🙉" : "🙈"} {/* Toggle between 🙈 and 🙉 */}
          </button>
        </div>
        <p className={classes.forgotpasswordtext}>
          <a href="forgetPass">Forgot password?</a>
        </p>
        <button type="submit" className={classes.submitbtn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
