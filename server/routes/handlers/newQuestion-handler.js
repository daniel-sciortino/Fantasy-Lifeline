const { db } = require("../../models/new-question");
const NewQuestion = require("../../models/new-question");
const { MongoClient } = require("mongodb");
const assert = require("assert");
require("dotenv").config();
const { MONGO_URI } = process.env;
const ObjectID = require("mongodb").ObjectId;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addQuestion = async (req, res) => {
  const newQuestion = new NewQuestion({
    playerOne: req.body.playerOne,
    playerTwo: req.body.playerTwo,
    userId: req.body.userId,
    votePlayerOne: [],
    votePlayerTwo: [],
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

const updateVoteOne = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const _id = req.params.id;
  console.log("1:", _id);
  const query = { _id };
  
  const newValues = { $set: { votePlayerOne: req.body.votePlayerOne } };


  if (!req.body) {
    res.status(404).json({ status: 404, message: "must use hello" });
  }
  try {
    await client.connect();
    const db = client.db();
    const results = await db
      .collection("newQuestions")
      .updateOne({ _id: ObjectID(_id) }, newValues);

  

    assert.equal(1, results.matchedCount);
    assert.equal(1, results.modifiedCount);

    res.status(200).json({ status: 200, _id, message: "Updated Successfully" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
};

const updateVoteTwo = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const _id = req.params.id;
  const query = { _id };
  
  const newValues = { $set: { votePlayerTwo: req.body.votePlayerTwo } };


  if (!req.body) {
    res.status(404).json({ status: 404, message: "must use hello" });
  }
  try {
    await client.connect();
    const db = client.db();
    const results = await db
      .collection("newQuestions")
      .updateOne({ _id: ObjectID(_id) }, newValues);

  

    assert.equal(1, results.matchedCount);
    assert.equal(1, results.modifiedCount);

    res.status(200).json({ status: 200, _id, message: "Updated Successfully" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
};



module.exports = {
  addQuestion,
  getAllQuestions,
  updateVoteOne,
  updateVoteTwo,
};
