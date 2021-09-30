const { response } = require("express");
const userModel = require("../models/user.models");

var allUsers = (req, res) => {
  //   res.send({ msg: "userController get msg" });
  const userData = userModel.find();
  // console.log(userData);
  userData
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
};

var addUsers = (req, res) => {
  console.log(req.body);

  //   res.send({ msg: "userController post msg" });
};

module.exports = {
  allUsers,
  addUsers,
};
