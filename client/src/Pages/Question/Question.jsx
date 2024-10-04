import React, { useContext, useEffect, useRef } from "react";
import classes from "./question.module.css";
import axios from "../../axiosConfig";
// import { StatusCodes } from "http-status-codes";
// import { useNavigate } from "react-router-dom";


function Question() {
  // const navigate = useNavigate();
    const titleDom = useRef();
    const descriptionDom = useRef();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [navigate]);
  // function handleLogout() {
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // }



  async function handleSubmit(e) {
    e.preventDefault();
    const title = titleDom.current.value;
    const description = descriptionDom.current.value; // Make a POST request to your server to create a new question

    // Make a POST request to your server to create a new question
    const response = await axios.post("/api/questions", { title, description });

    try {
      if (response.status === 201) {
        console.log("Question created successfully");
      } else {
        console.error("Failed to create question");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className={classes.question__container}>
        <div className={classes.question__wrapper}>
          <h3 className={classes.question__header__title}>
            <span className={classes.highlight}>
              Steps To Write A Good Question
            </span>
          </h3>
          <div className={classes.question__list}>
            <ul className={classes.question__listUl}>
              <li>Summarize your problems in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>
                Explain what you have tried and what you expected to happen.
              </li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </div>

          <h4 className={classes.highlight}>Post Your Question</h4>
          <div className={classes.question__header__titleTwo}>
            <form onSubmit={handleSubmit} className={classes.question__form}>
              <input
                className={classes.question__title2}
                ref={titleDom}
                type="text"
                placeholder="Question title"
              />
              <textarea
                rows={4}
                className={classes.question__description}
                ref={descriptionDom}
                type="text"
                placeholder="Question Description..."
              />

              <span>
                <button
                  className={classes.question__button}
                  variant="primary"
                  type="submit"
                >
                  Post Question
                </button>
                <span>
                  <button
                    className={classes.question__btn}
                    variant="success"
                    type="submit"
                  >
                    Back to Home
                  </button>
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
