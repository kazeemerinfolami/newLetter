exports.homeRoute = (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
};
