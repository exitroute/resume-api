const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const app = require("../app");
const Contact = require("../model/Contact");

exports.authenticate = async function (req, res) {
  try {

    console.log("authentication request for", req.body.name);
    console.log("token", req.headers.authorization)
    // const user = await User.findOne({ name: req.body.name });
    // console.log("user", user);

    // if (!user) {
    //   res.json({
    //     success: false,
    //     message: "Authentication failed. User not found."
    //   });
    // } else {
    //   const hashedPW = bcrypt.compareSync(req.body.password, user.password); // true

    //   if (!hashedPW) {
    //     return res.json({
    //       success: false,
    //       message: "Authentication failed. Wrong token."
    //     });
    //   } else {
    //     const payload = {
    //       user: user.name,
    //       admin: user.admin
    //     };
    //     const token = jwt.sign(payload, app.get("superSecret"), {
    //       expiresIn: 86400
    //     });

    //     return res.json({
    //       success: true,
    //       status: 200,
    //       user: user,
    //       message: "Enjoy your token!",
    //       token: token
    //     });
    //   }
    // }
  } catch (error) {
    console.log(error);
  }
};

exports.newContact = async (req, res) => {
  if (/\S+@\S+\.\S+/.test(req.body.name)) {
    try {
      console.log("new contact request", req.body.name)
      // const contact = await Contact.findOne({ name: req.body.name });

      // if (contact) {
      //   res.json({
      //     success: false,
      //     status: 409,
      //     message: "contact already exists!"
      //   });
      // } else if (!contact) {
      //   const hash = bcrypt.hashSync(req.body.password, salt);
      //   const contactToken = uuidv4(4);
      //   const contact = new Contact({
      //     name: req.body.name,
      //     password: hash,
      //     admin: false,
      //     verificationToken: contactToken
      //   });
      //   await contact.save();
      //   console.log("contact saved")
      // }
    } catch (error) {
      console.log(error);
    }
  }
}

exports.allContacts = async (req, res) => {
  console.log("all contacts returned");
} 