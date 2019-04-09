const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const app = require("../app");
const Contact = require("../model/Contact");
const resume = require("../data/resume.json");

exports.authenticate = async function (req, res) {
  try {

    console.log("token", req.headers.authorization)
    const token = req.headers.authorization

    if (token === "Bearer 1973") {
      res.json({
        success: true,
        status: 200,
        message: "Here's the data",
        payload: resume
      });
    } else {
      res.json({
        success: false,
        message: "Authentication failed"
      });
    }
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