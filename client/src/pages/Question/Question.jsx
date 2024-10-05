import React, { useEffect, useState } from "react";
import styles from "./question.module.css";
import { axiosInstance } from "../../utility/axios";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Loader from "../../components/Loader/Loder";

function Question() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/questions").then((res) => {
      // console.log(res.data.message)
      setQuestions(res.data.message);
      setLoading(false);
    });
  }, []);
  
  return (
    <div className={styles.container}>
      <div className={styles.search_question}>
        <input type="text" placeholder="search for a question" />
      </div>
      <hr />
      <div className={styles.questions_list}></div>
      <h1 className={styles.title}>Questions</h1>
      {loading ? (
        <Loader />
      ) : questions.length === 0 ? (
        <div
          style={{
            display: "flex",
            marginTop: "200px",
            justifyContent: "center",
          }}
        >
          <p>No Questions Found</p>
        </div>
      ) : (
        questions.map((question) => {
          return (
            <QuestionCard
              key={question.questionid}
              id={question.questionid}
              userName={"fantahun"}
              questionTitle={question.title}
              description={question.description}
              question_date={"Sept 3,2024"}
            />
          );
        })
      )}
    </div>
  );
}

export default Question;
