import React, { useEffect, useState, useContext } from "react";
import styles from "./questions.module.css";
import { axiosInstance } from "../../utility/axios";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Loader from "../../components/Loader/Loader";
import { UserState } from "../../App";

function Question() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  const { user } = useContext(UserState);
  const loginUsername = user?.username;

  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/questions").then((res) => {
      setQuestions(res.data.message);
      setLoading(false);
    });
  }, []);

  // Filtered questions based on search query from out users
  const filteredQuestions = questions.filter((question) => {
    const titleMatches = question.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const descriptionMatches = question.description
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return titleMatches || descriptionMatches;
  });

  return (
    <div className={styles.container}>
      <div className={styles.search_question}>
        <input
          type="text"
          placeholder="search for a question"
          value={searchQuery}
          // Update search query state whenever our user types on the input field
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>
      <hr />
      <h1 className={styles.title}>Questions</h1>
      {loading ? (
        <Loader />
      ) : filteredQuestions.length === 0 ? ( 
        <div
          style={{
            display: "flex",
            marginTop: "60px",
            fontSize: "25px !important",
            color: "var(--primary-color)",
            marginBottom: "200px",
            justifyContent: "center",
          }}
        >
          <p>No Questions Found</p>
        </div>
      ) : (
        filteredQuestions.map((question) => (
          <QuestionCard
            key={question.questionid}
            id={question.questionid}
            userName={question.username}
            questionTitle={question.title}
            description={question.description}
            question_date={question.createdAt}
          />
        ))
      )}
    </div>
  );
}


export default Question;
