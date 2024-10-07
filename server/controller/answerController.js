const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../config/dbConfig");
const crypto = require("crypto");

// Get Answers for a Question
async function getAnswer(req, res) {
  const questionid = req.params.question_id;
  try {
    const [rows] = await dbConnection.query(
      `SELECT 
            a.answerid, 
            a.userid AS answer_userid, 
            a.answer
         FROM 
            answers a
         WHERE 
            a.questionid = ?`,
      [questionid]
    );
    return res.status(StatusCodes.OK).json({});
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "something went wrong, please try again later" });
  }
}

// Post Answers for a Question
async function postAnswer(req, res) {
  const { userid, answer, questionid } = req.body;
  const currentTimestamp = new Date();
  currentTimestamp.setHours(currentTimestamp.getHours() + 3); // Adjusting for UTC+3
  const formattedTimestamp = currentTimestamp
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  if (!userid || !answer || !questionid) {
   return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "All fields are required" });
  }
  // const answerid = crypto.randomBytes(10).toString("hex");
  try {
    await dbConnection.query(
      "insert into answers (userid, answer, questionid,createdAt) values ( ?,?,?,?)",
      [ userid, answer, questionid,formattedTimestamp]
    );
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "answer posted successfully" });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "something went wrong, please try again later" });
  }
}

module.exports = {
  getAnswer,
  postAnswer,
};
