const mongoose = require('mongoose');
const { Schema } = mongoose;


const ContactSchema = new Schema ({
  first_name: String,
  second_name: String,
  email: String
});

module.exports = mongoose.model("Contact", ContactSchema);

