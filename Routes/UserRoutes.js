const UserService = require("../Service/UserService");
const express = require("express");
const service = new UserService();

const router = express();

router.post("/", service.UserLogin);
router.post("/signup", service.CreateUser);

module.exports = router;
