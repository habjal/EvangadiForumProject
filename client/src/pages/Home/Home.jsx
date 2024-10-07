import React, { useContext } from "react";
import styles from "./home.module.css";
import { BsArrowRightSquareFill } from "react-icons/bs";
import Questions from "../Question/Questions";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import { UserState } from "../../App";

function Home() {
  const { user } = useContext(UserState);
  const userName = user?.username;
  console.log(userName);
  return (
    <Layout>
      <div className={styles.home_container}>
        <div className={styles.ask_welcome_holder}>
          <div className={styles.ask_question}>
            <Link to="/ask" style={{ textDecoration: "none" }}>
              <button className={styles.ask_btn}>
                <span>I've got a question</span>
                <BsArrowRightSquareFill
                  size={20}
                  style={{ padding: "0 !important" }}
                />
              </button>
            </Link>
          </div>
          <div className={styles.welcome_msg}>
            <p>
              Welcome <span className={styles.userName}>{userName}</span>
            </p>
          </div>
        </div>

        <div className={styles.questions_list}>
          <Questions />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
