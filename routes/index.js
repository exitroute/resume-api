const express = require('express');
const router = express.Router();
const { welcomeMessage } = require("../controllers/messages")

router.get("/", welcomeMessage);

module.exports = router;
