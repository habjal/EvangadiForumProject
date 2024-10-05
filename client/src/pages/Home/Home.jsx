import React from "react";
import styles from "./home.module.css";
import { BsArrowRightSquareFill } from "react-icons/bs";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

function Home() {
  const userName = "Fantahun";
  return (
    <div className={styles.home_container}>
      <div className={styles.ask_welcome_holder}>
        <div className={styles.ask_question}>
          <button className={styles.ask_btn} onClick={console.log("clicked")}>
            <span>I've got a question</span>
            <BsArrowRightSquareFill
              size={20}
              style={{ padding: "0 !important" }}
            />
          </button>
        </div>
        <div className={styles.welcome_msg}>
          <p>
            Welcome <span className={styles.userName}>{userName}</span>
          </p>
        </div>
      </div>
      <div className={styles.search_question}>
        <input type="text" placeholder="search for a question" />
      </div>
      <hr />
      <div className={styles.questions_list}>
        <br />
        <h1>Questions</h1>
        <br />
        {/* list questions */}
        <QuestionCard
          userName={"testUser"}
          questionTitle={"Test Question Four"}
          description={
            `lorem ipsum dolor sit amet venua amet venua amet venua amet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venua se anu piar gonza`.substring(
              0,
              80
            ) + " . . ."
          }
          question_date={"Sept 3,2024"}
        />
        <QuestionCard
          userName={"testUser"}
          questionTitle={"Test Question Four"}
          description={
            `lorem ipsum dolor sit amet venua amet venua amet venua amet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venua se anu piar gonza`.substring(
              0,
              80
            ) + " . . ."
          }
        />
        <QuestionCard
          userName={"testUser"}
          questionTitle={"Test Question Four"}
          description={
            `lorem ipsum dolor sit amet venua amet venua amet venua amet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venua se anu piar gonza`.substring(
              0,
              80
            ) + " . . ."
          }
        />
        <QuestionCard
          userName={"testUser"}
          questionTitle={"Test Question Four"}
          description={
            `lorem ipsum dolor sit amet venua amet venua amet venua amet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venua se anu piar gonza`.substring(
              0,
              80
            ) + " . . ."
          }
        />
        <QuestionCard
          userName={"testUser"}
          questionTitle={"Test Question Four"}
          description={
            `lorem ipsum dolor sit amet venua amet venua amet venua amet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venua se anu piar gonza`.substring(
              0,
              80
            ) + " . . ."
          }
        />
        <QuestionCard
          userName={"testUser"}
          questionTitle={"Test Question Four"}
          description={
            `lorem ipsum dolor sit amet venua amet venua amet venua amet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venuaamet venua se anu piar gonza`.substring(
              0,
              80
            ) + " . . ."
          }
        />
      </div>
    </div>
  );
}

export default Home;
