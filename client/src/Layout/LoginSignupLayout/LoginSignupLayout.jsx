import React, { useState } from "react";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";
import About from "../../pages/About/About";
import styles from "./LoginSignupLayout.module.css"; // Assuming you have a CSS module

function LoginSignupLayout() {
  const [isLogin, setIsLogin] = useState(true); // Track whether it's login form or signup form

  // Toggle between Login and SignUp form
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.formsContainer}>
        <div className={`${styles.form} ${isLogin ? styles.slideIn : styles.slideOut}`}>
          {isLogin ? (
            <Login onSwitch={toggleForm} />  {/* Login form */}
          ) : (
            <SignUp onSwitch={toggleForm} />  {/* SignUp form */}
          )}
        </div>
        {/* About component is always visible */}
        <div className={styles.aboutContainer}>
          <About />
        </div>
      </div>
    </div>
  );
}

export default LoginSignupLayout;
