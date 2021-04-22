"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  getUserById,
  addUser,
} = require("../server/routes/handlers/users-handler");
const {
  addQuestion,
  getAllQuestions,
  updateQuestion,
} = require("../server/routes/handlers/newQuestion-handler");

require("dotenv").config();
const { MONGO_URI } = process.env;
const mongoose = require("mongoose");
const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  ////// Sign in & Sign Up //////
  .post("/login", getUserById)
  .post("/sign-up", addUser)

  /////// New Question ///////
  .get("/all-questions", getAllQuestions)
  .post("/new-question", addQuestion)
  .put("/vote-one/:id", updateQuestion)
  .put("/vote-two/:id", updateQuestion)
  

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

//connect to mongoDB

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Connected to Mongo"))
  .catch((err) => console.log(err));
