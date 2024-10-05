import React from "react";
import styles from "./questionCard.module.css";
import { MdAccountCircle } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
function QuestionCard({ id,userName, questionTitle,description,question_date }) {
  return (
    <Link to={`/question/${id}`} style={{textDecoration:"none" ,color:"black"}}>
    <div className={styles.question_holder}>
        <div className={styles.requester_question_holder}>
            <div className={styles.requester_holder}>
              <MdAccountCircle size={50} />
              <div>{userName}</div>
            </div>

            <div className={styles.title_description_holder}>
              <p className={styles.question_title}>{questionTitle}</p>
              <p>{description}</p>
              <p className={styles.question_date}>{question_date}</p>
            </div>
          </div>

          <div className={styles.question_arrow_holder}>
            <div>
              <FaChevronRight size={23} />
            </div>
          </div>
    </div>
    </Link>
  );
}

export default QuestionCard;
