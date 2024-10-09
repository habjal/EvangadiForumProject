import React, { useState } from "react";
import {axiosInstance} from "../../utility/axios";
import classes from "./login.module.css";
import { useNavigate } from "react-router-dom";
function Login({ onSwitch }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


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
      const response = await axiosInstance.post(
        "/user/Login",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      // console.log(response.data)
      localStorage.setItem("EV-Forum-token-G3-APR2024", response.data.token); // Store the token in local storage
window.location.href = "/"; // This will navigate to the / page and refresh the application
      if (response.status === 200) {
        setSuccess("Login successful! Redirecting...");
        setError(null);
      } else {
        setError(response.data.msg || "Login failed.");
        setSuccess(null);
      }
    } catch (err) {
      setError(
        err.response?.data?.msg || "Error logging in. Please try again."+err
      );
      setSuccess(null);
    }
  };

  return (
    <div className={classes.formcontainer}>
      <div className={classes.innerContainer}>
     <div className={classes.heading}>
     <h2 className={classes.title}>Login to your account</h2>
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
     </div>
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
          <button type="button" onClick={handleTogglePassword} style={{}}>
            {showPassword ? "🙉" : "🙈"}
          </button>
        </div>
        <p className={classes.forgotpasswordtext}>
          <a href="/forgetPass">Forgot password?</a>
        </p>
        <button type="submit" className={classes.submitbtn}>
          Login
        </button>
      </form>
      </div>
    </div>
  );
}

export default Login;
