const express = require('express');
const router = express.Router();

const { authMessage } = require("../controllers/messages");
const { authenticate, newContact, allContacts } = require("../controllers/authentication");

router
  .route("/")
  .get(authMessage)
  .post(authenticate);

router
  .route("/contacts")
  .get(allContacts)
  .post(newContact);

module.exports = router;
