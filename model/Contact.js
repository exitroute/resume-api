const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Contact', new Schema({ 
  name: String, 
  admin: Boolean,
  password: String,
  verificationToken: String
}));
