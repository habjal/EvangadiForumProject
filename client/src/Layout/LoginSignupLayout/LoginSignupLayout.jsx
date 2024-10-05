import React from "react";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";
import About from "../../pages/About/About";
import styles from "./LoginSignupLayout.module.css";

function LoginSignupLayout() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app-container">
      <div className="forms-container">
        <div className={`form ${isLogin ? "slide-in" : "slide-out"}`}>
          {isLogin ? (
            <Login onSwitch={toggleForm} />
          ) : (
            <SignUp onSwitch={toggleForm} />
          )}
        </div>
        <About />
      </div>
    </div>
  );
}

export default LoginSignupLayout;
