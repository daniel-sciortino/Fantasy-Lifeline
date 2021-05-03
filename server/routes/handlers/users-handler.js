const User = require("../../models/user");
const { MongoClient } = require("mongodb");
const { db } = require("../../models/new-question");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUserById = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db("FantasyLifeline");
  const foundUser = await db
    .collection("users")
    .findOne({ email: req.body.email });

  console.log("connected!");

  client.close();
  console.log("disconnected!");

  if (foundUser) {
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
