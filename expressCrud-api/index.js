require("dotenv").config();
const express = require("express"); //import express module
const mongoose = require("mongoose");
const app = express(); // express() is top level function exported by express module
// console.log(typeof app, typeof express); // type of app and express()
const db = require("./database/database.config");
const userRouter = require("./Routes/users.routes");
// console.log(db); url testing

var mongoConnect = mongoose.connect(db.url);

// console.log(mongoConnect); promise testing
mongoConnect
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("DB not connected", error);
  });

app.use("/", userRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `Example app listening at http://${process.env.HOST}:${process.env.PORT}`
  );
});
