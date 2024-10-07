import React, { useEffect, useState ,useContext} from "react";
import styles from "./questions.module.css";
import {axiosInstance} from "../../utility/axios";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Loader from "../../components/Loader/Loder";
import { UserState } from "../../App";
function Question() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(UserState);
  const loginUsername = user?.username;

  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/questions").then((res) => {
      // console.log(res.data.message)
      setQuestions(res.data.message);
      setLoading(false);
      console.log(questions);
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
              userName={question.username}
              questionTitle={question.title}
              description={question.description}
              question_date={question.createdAt}
            />
          );
        })
      )}
    </div>
  );
}

export default Question;
