const express = require('express');
const bodyParser = require("body-parser");
const logger = require('morgan');
const cors = require("cors");


const app = express();

const port = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.set("superSecret", "thisShould be supersecret")

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

console.log(`server is running on ${port}`);

module.exports = app;
