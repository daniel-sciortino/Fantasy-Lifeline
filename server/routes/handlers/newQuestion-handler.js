const { db } = require("../../models/new-question");
const NewQuestion = require("../../models/new-question");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addQuestion = async (req, res) => {
  const newQuestion = new NewQuestion({
    playerOne: req.body.playerOne,
    playerTwo: req.body.playerTwo,
    votePlayerOne: 0,
    votePlayerTwo: 0,
  });

  newQuestion.save();

  if (req.body) {
    res.status(200).json({
      status: 200,
      newQuestion: req.body,
    });
  } else {
    res.status(400).json({
      status: 400,
      msg: "Question already exists!",
    });
  }
};

const getAllQuestions = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db("FantasyLifeline");
  const data = await db.collection("newQuestions").find().toArray();

  console.log("connected!");

  client.close();
  console.log("disconnected!");

  if (data) {
    res.status(200).json({
      status: 200,
      questions: data,
    });
  } else {
    res.status(400).json({
      status: 400,
      msg: "Question already exists!",
    });
  }
};

const updateQuestion = async (req, res) => {};

module.exports = {
  addQuestion,
  getAllQuestions,
  updateQuestion,
};
