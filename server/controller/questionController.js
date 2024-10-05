const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../config/dbConfig");
const crypto = require("crypto");

// post questions / ask questions
async function postQuestion(req, res) {
  const { userid, title, description, tag } = req.body;
  if (!userid || !title || !description) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "All fields are required" });
  }
  const questionid = crypto.randomBytes(10).toString("hex");
  try {
    await dbConnection.query(
      "insert into questions (questionid, userid, title, description, tag) values ( ?, ?, ?, ?, ?)",
      [questionid, userid, title, description, tag]
    );
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "question posted successfully" });
  } catch (err) {
    //    console.log(err);
    return res
      .status(500)
      .json({ message: "something went wrong, please try again later" +err});
  }
}

// get all questions
async function getAllQuestions(req, res) {
  try {
    const [questions] = await dbConnection.query("select * from questions");
    return res.status(StatusCodes.OK).json({
      message: questions,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "something went wrong, please try again later" });
  }
}

// get single question and answers
async function getQuestionAndAnswer(req, res) {
  const questionid = req.params.questionId;

  try {
    const [rows] = await dbConnection.query(
      `SELECT 
          q.questionid, 
          q.title, 
          q.description, 
          a.answerid, 
          a.userid AS answer_userid, 
          a.answer
       FROM 
          questions q
       LEFT JOIN 
          answers a ON q.questionid = a.questionid
       WHERE 
          q.questionid = ?`,
      [questionid]
    );

    // Check if the question exists
    if (rows.length === 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Question not found" });
    }

    // Reshape the data to include answers under the question
    const questionDetails = {
      id: rows[0].questionid,
      title: rows[0].title,
      description: rows[0].description,
      answers: rows
        .map((answer) => ({
          answerid: answer.answerid,
          userid: answer.answer_userid,
          answer: answer.answer,
        }))
        .filter((answer) => answer.answerid !== null), // Filter out any null answers
    };

    res.status(StatusCodes.OK).json(questionDetails);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching question details" + error });
  }
}
module.exports = { postQuestion, getAllQuestions, getQuestionAndAnswer };
