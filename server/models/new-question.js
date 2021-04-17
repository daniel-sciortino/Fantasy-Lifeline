const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const schema = new Schema({
  playerOne: { type: Object, required: true },
  playerTwo: { type: Object, required: true },
  votePlayerOne: { type: Number, required: true },
  votePlayerTwo: { type: Number, required: true },
});

module.exports = mongoose.model("NewQuestion", schema, "newQuestions");
