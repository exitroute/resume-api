const express = require('express');
const router = express.Router();

const { 
  addContact, 
  getContact,
  updateContact,
  deleteContact 
} = require("../controllers/contactController")

router.route("/")
  .post(addContact)

router.route("/:email")
  .get(getContact)
  .post(updateContact)
  .delete(deleteContact);

module.exports = router;
