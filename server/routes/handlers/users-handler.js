const User = require("../../models/user");

const getUserById = (req, res) => {
  const foundUser = User.findOne({ email: req.body.email });

  if (!foundUser) {
    res.status(200).json({
      status: 200,
      user: foundUser,
    });
  } else {
    res.status(404).json({
      status: 404,
      msg: "User not found!",
    });
  }
};


const addUser = async (req, res) => {
  const foundUser = User.findOne({ email: req.body.email });
  if (foundUser) {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      isSignedIn: req.body.isSignedIn,
    });
    user.save();

    res.status(200).json({
      status: 200,
      user: req.body,
    });
  } else {
    res.status(400).json({
      status: 400,
      msg: "User already exists!",
    });
  }
};

module.exports = {
  getUserById,
  addUser,
};
