require("dotenv").config();

const express = require("express");
const app = express();
const port = 5500;

// checking server is responsive on the browser
// app.get("/", (req, res) => {
//   res.send("wellcome to evangadi forumserver");
// });

// middleware for staic files
const userrouter = require("./routes/userRoutes");


// json middile ware to extract jason data
app.use(express.json());

// user routes middleware for all ppages that send request on the brower that leads to router
app.use("/api/users", userrouter);




// database connection
const dbconnection = require("./config/dbconfig");
async function start() {
  try {
    const results = await dbconnection.execute("select 'test'");
    console.log(results);
    app.listen(port);
    console.log("database connected");
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();

// app.listen(port, (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(`Listening on port ${port}`);
//   }
// });
