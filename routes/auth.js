const express = require('express');
const router = express.Router();

const { authMessage } = require("../controllers/messages");
const { authenticate, newUser } = require("../controllers/authentication");

router
  .route("/")
  .get(authMessage)
  .post(authenticate);

module.exports = router;
