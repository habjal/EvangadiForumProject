import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../utility/axios";
import Layout from "../../Layout/Layout";

function QuestionAndAnswer() {
  const { questionId } = useParams(); // Retrieves the `id` from the URL
  const [questionDetails, setQuestionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  // Retrieves the value of 'id' from the query string
  useEffect(() => {
    axiosInstance.get(`/question/${questionId}`).then((res) => {
      console.log(res.data);
      setQuestionDetails(res.data);
    });
  }, [questionId]);
  return (
    <Layout>
      <div>
        <h1>{questionDetails?.title}</h1> {/* Access the title safely */}
        <p>{questionDetails?.description}</p>
        <h2>Answers:</h2>
        {questionDetails?.answers.length > 0 ? (
          questionDetails?.answers.map((answer) => (
            <div key={answer.answerid}>
              <p>
                <strong>User {answer.userid}:</strong> {answer.answer}
              </p>
            </div>
          ))
        ) : (
          <p>No answers yet</p>
        )}
      </div>
    </Layout>
  );
}

export default QuestionAndAnswer;
