import React from "react";
import classes from "./header.module.css";
import EvangadiLogo from "../../Assets/Images/evangadi-logo-header.png";

function Header() {
  return (
    <>
      <section className={classes.outer_container}>
        <div className={classes.header_container}>
          <div className={classes.left_container}>
            <div className={classes.logo_container}>
              <img src={EvangadiLogo} alt="Evangadi Logo" />
            </div>
          </div>
          <div className={classes.right_container}>
            <nav className={classes.nav_links}>
              <a href="#">Home</a>
              <a href="#">How it Works</a>
            </nav>
            <button className={classes.logout_btn}>Log Out</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
