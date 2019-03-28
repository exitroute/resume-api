const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const app = require("../app");
const User = require("../model/User");

exports.authenticate = async function (req, res) {
  try {
    const user = await User.findOne({ name: req.body.name });
    console.log("user", user);

    if (!user) {
      res.json({
        success: false,
        message: "Authentication failed. User not found."
      });
    } else {
      const hashedPW = bcrypt.compareSync(req.body.password, user.password); // true

      if (!hashedPW) {
        return res.json({
          success: false,
          message: "Authentication failed. Wrong token."
        });
      } else {
        const payload = {
          user: user.name,
          admin: user.admin
        };
        const token = jwt.sign(payload, app.get("superSecret"), {
          expiresIn: 86400
        });

        return res.json({
          success: true,
          status: 200,
          user: user,
          message: "Enjoy your token!",
          token: token
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

exports.newUser = async (req, res) => {
  if (/\S+@\S+\.\S+/.test(req.body.name)) {
    try {
      const user = await User.findOne({ name: req.body.name });

      if (user) {
        res.json({
          success: false,
          status: 409,
          message: "User already exists!"
        });
      } else if (!user) {
        const hash = bcrypt.hashSync(req.body.password, salt);
        const userToken = uuidv4(4);
        const user = new User({
          name: req.body.name,
          password: hash,
          admin: false,
          verificationToken: userToken
        });
        await user.save();
        console.log("user saved")
      }
    } catch (error) {
      console.log(error);
    }
  }
}
