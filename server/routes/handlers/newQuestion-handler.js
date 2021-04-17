const NewQuestion = require("../../models/new-question");

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

module.exports = {
  addQuestion,
};
