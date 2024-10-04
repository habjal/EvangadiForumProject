import React from "react";
import styles from "./questionCard.module.css";
import { MdAccountCircle } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
function QuestionCard({ userName, questionTitle,description,question_date }) {
  return (
    <div className={styles.question_holder}>
      <div className={styles.requester_question_holder}>
        <div className={styles.requester_holder}>
          <MdAccountCircle size={40} />
          <div>{userName}</div>
        </div>

        <div className={styles.title_description_holder}>
          <p className={styles.question_title}>{questionTitle}</p>
          <p>{description}</p>
          <p>{question_date}</p>
        </div>
      </div>

      <div className={styles.question_arrow_holder}>
        <div>
          <FaChevronRight size={23} />
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
