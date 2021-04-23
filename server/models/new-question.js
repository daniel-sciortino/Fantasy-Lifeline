const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const schema = new Schema({
  playerOne: { type: Object, required: true },
  playerTwo: { type: Object, required: true },
  userId: { type: String, required: true },
  votePlayerOne: { type: Array, required: true },
  votePlayerTwo: { type: Array, required: true },
});

module.exports = mongoose.model("NewQuestion", schema, "newQuestions");
