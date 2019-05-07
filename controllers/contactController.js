const Contact = require("../model/Contact");

exports.addContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
}
