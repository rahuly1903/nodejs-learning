const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controllers");

router.get("/users", userController.allUsers);

router.post("/users", userController.addUsers);

module.exports = router;
