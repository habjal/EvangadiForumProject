const express = require("express");
const router = express.Router(); // using router insted of app on the servers
const { register, login, check } = require("../controller/usercontroller");
// authentication middleware
const authmiddleware = require("../middleware/authmiddleware");

// register route
router.post("/register", register);

// login users
router.post("/login", login);

//check users
router.get("/check", authmiddleware, check);

module.exports = router;
