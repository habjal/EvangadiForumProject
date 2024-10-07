import React from "react";
import classes from "./header.module.css";
import EvangadiLogo from "../../Assets/Images/evangadi-logo-header.png";
import { Link } from "react-router-dom";

function Header() {

  const handleSignOut = () => {
    localStorage.removeItem("EV-Forum-token-G3-APR2024");//remove the auth token
    window.location.replace("/auth"); //redirect to auth page so that user can login again
  }
  
  return (
    <>
      <section className={classes.outer_container}>
        <div className={classes.header_container}>
          <div className={classes.left_container}>
            <div className={classes.logo_container}>
              <Link to="/">
                <img src={EvangadiLogo} alt="Evangadi Logo" />
              </Link>
            </div>
          </div>
          <div className={classes.right_container}>
            <nav className={classes.nav_links}>
              <Link to="/">Home</Link>
              <Link to="/howitworks">How it Works</Link>
            </nav>
            <button className={classes.logout_btn} onClick={handleSignOut}>Log Out</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
