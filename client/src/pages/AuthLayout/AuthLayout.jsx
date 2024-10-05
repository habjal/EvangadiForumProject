import React, { useState } from "react";
import styles from "./authLayout.module.css"; // Assuming this is your CSS module
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import About from "../../pages/About/About";

export default function AuthLayout() {
  const [isSignUp, setIsSignUp] = useState(true); // Renamed the setter to match the state

  // Function to toggle between SignUp and Login forms
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div
          className={`${styles.formContainer} ${
            isSignUp ? styles.slideIn : styles.slideOut
          }`}
        >
          {isSignUp ? (
            <SignUp onSwitch={toggleForm} />
          ) : (
            <Login onSwitch={toggleForm} />
          )}
        </div>

          <About />

      </div>
    </div>
  );
}
