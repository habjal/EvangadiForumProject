
import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./signUp.module.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null); // for error message
  const [success, setSuccess] = useState(null); // for success message
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev); // Toggle the visibility state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the server to register the user
    try {
      const response = await axios.post(
        "http://localhost:5500/api/users/register",
        {
          // Sending user registration data
          username: formData.username,
          firstname: formData.firstName, //Make sure to match the backend field names
          lastname: formData.lastName,
          email: formData.email,
          Password: formData.password, // Ensure this matches the backend property name
        }
      );

      if (response.status === 200) {
        setSuccess("User registered successfully!"); // Handle success response
        setError(null); // clear any previous errors
      } else {
        setError(response.data.msg || "Registration failed."); // Handle error response
        setSuccess(null); // clear any previous success message
      }
    } catch (err) {
      setError(
        err.response?.data?.msg ||
          "Error submitting the form. Please try again."
      ); // Enhanced error handling
      setSuccess(null); // clear any previous success message
    }
  };
  <SignIn />;
  // Reset the form data after a successful registration
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setFormData({
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        setSuccess(null); // Clear success message after a while
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);
  // console.log(formData);
  return (
    <div className={classes.formcontainer}>
      <h2>Join the network</h2>
      <p className="signin-text">
        Already have an account?{" "}
        <a href="http://localhost:5173/login">Sign in</a>
      </p>
      {error && <p className={classes.error}>{error}</p>}{" "}
      {/* Display error message */}
      {success && <p className={classes.success}>{success}</p>}{" "}
      {/* Display success message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <div className={classes.nameinputs}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
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
            type={showPassword ? "text" : "password"} // Toggle between text and password
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? "🙉" : "🙈"} {/* Toggle between 🙈 and 🙉 */}
          </button>
          <label>
            I agree to the <a href="#">privacy policy</a> and{" "}
            <a href="#">terms of service</a>.
          </label>
        </div>
        <button type="submit" className={classes.submitbtn}>
          Agree and Join
        </button>
        <p className={classes.signintext}>
          <a href="http://localhost:5173/login">Already have an account?</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;



