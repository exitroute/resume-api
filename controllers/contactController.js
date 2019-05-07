const Contact = require("../model/Contact");

exports.addContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
}

exports.getContact = async (req, res) => {
  const { email } = req.params;
  const contact = await Contact.findOne({email});
  res.json(contact);
}

exports.updateContact = async (req, res) => {
  const { email } = req.params;
  const contact = await Contact.findOneAndUpdate({email}, req.body);
  res.json(contact);
}

exports.deleteContact = async (req, res) => {
  const { email } = req.params;
  const contact = await Contact.findOneAndDelete({email});
  res.json(contact);
}