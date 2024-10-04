import React, { useState } from "react";
import styles from "./answer.module.css";
import { questionData, answersData } from "./mockdata";

const Answer = () => {
  const [answers, setAnswers] = useState(answersData);
  const [newAnswer, setNewAnswer] = useState("");

  const handlePostAnswer = () => {
    if (newAnswer.trim()) {
      const newAnswerData = {
        id: answers.length + 1,
        username: "newUser", // Replace with logged-in user info if available
        answer: newAnswer,
      };
      setAnswers([...answers, newAnswerData]);
      setNewAnswer("");
    }
  };

  return (
    <div className={styles.container}>
      {/* <header className={styles.header}>
        <h1 className={styles.logo}>EVANGADI</h1>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            Home
          </a>
          <a href="#" className={styles.navLink}>
            How it Works
          </a>
          <button className={styles.logoutButton}>Logout</button>
        </nav>
      </header> */}

      <main className={styles.main}>
        <section className={styles.questionSection}>
          <h2 className={styles.questionTitle}>Question</h2>
          <p className={styles.questionText}>{questionData.question}</p>
          <a href="#" className={styles.subQuestionLink}>
            {questionData.subQuestion}
          </a>
        </section>

        <section className={styles.answerSection}>
          <h3 className={styles.answerSectionTitle}>
            Answer From The Community
          </h3>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.answerItem}>
              <div className={styles.profileContainer}>
                <div className={styles.profileIcon}></div>
                <p className={styles.profileName}>{answer.username}</p>
              </div>
              <p className={styles.answerText}>{answer.answer}</p>
            </div>
          ))}
        </section>

        <section className={styles.answerFormSection}>
          <h3 className={styles.answerFormTitle}>Answer The Top Question</h3>
          <a href="/question" className={styles.questionPageLink}>
            Go to Question page
          </a>
          <textarea
            placeholder="Your Answer..."
            className={styles.answerInput}
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
          <button
            onClick={handlePostAnswer}
            className={styles.postAnswerButton}
          >
            Post Your Answer
          </button>
        </section>
      </main>
    </div>
  );
};

export default Answer;
