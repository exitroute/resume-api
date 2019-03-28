exports.welcomeMessage = async function (req, res)  {
  res.send("Hello! Welcome to the resume API for your applicant")
};

exports.authMessage = async function (req, res)  {
  console.log("hit");
  res.send("Hello. Please use the link in the email");
};