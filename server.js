const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const router = require("./router/router");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/home", router);

app.listen(process.env.PORT || 3000, function () {
  console.log("connected to port 3000");
});
