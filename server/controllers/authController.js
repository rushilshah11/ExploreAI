const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("Hello World");
};

//register endpoint
const registerUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    //check if username is entered
    if (!username) {
      return res.json({
        error: "Username is required",
      });
    }

    //check if password is entered
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required. Must be 6 or more characters",
      });
    }

    if (password != confirmPassword) {
      return res.json({
        error: "Passwords do not match",
      });
    }

    //check if email already exists
    const exist = await User.findOne({ email });

    if (exist) {
      return res.json({
        error: "Email is already registered",
      });
    }

    const hashedPassword = await hashPassword(password);
    //create new user object
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};

//login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if email is entered
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }

    //check if password is entered
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required. Must be 6 or more characters",
      });
    }

    //check if email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "Email is not registered",
      });
    }

    //check if password is correct
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.json({
        error: "Password is incorrect",
      });
    }

    if (match) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
          username: user.username,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      res.json({ message: "Login successful", token, user });
    }
  } catch (err) {
    console.log(err);
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
