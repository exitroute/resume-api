const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

const app = express();

const port = process.env.PORT || 3000;

// mongoose.connect(process.env.DB_URL, {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });
// mongoose.connection.on("error", console.error);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.set("superSecret", "thisShould be supersecret");

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const contactsRouter = require("./routes/contacts");
app.use("/contacts", contactsRouter);

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

console.log(`server is running on ${port}`);

module.exports = app;
