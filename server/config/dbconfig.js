const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
  user: "evangadi-admin",
  database: "evangadi_forum",
  password: "123456",
  connectionLimit: 10,
  host: "localhost",
});

// cecking the database is connected or not
// dbconnection.execute("select 'test'", (err, results) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(results);
//   }
// });

module.exports = dbconnection.promise();
