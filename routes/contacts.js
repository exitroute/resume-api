const express = require('express');
const router = express.Router();

const { addContact } = require("../controllers/contactController")

router.route('/').post(addContact);

module.exports = router;
