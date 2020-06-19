const express = require("express");
const router = express.Router();
require("dotenv").config();
const { homeRoute } = require("../controller/auth");

router.get("/home", homeRoute);
app.post("/home", (req, res) => {
  const first = req.body.firstName;
  const last = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.PhoneNo;

  const originData = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: first,
          LNAME: last,
          PHONE: phone,
        },
      },
    ],
  };
  router.post("/home/failure", (req, res) => {
    res.redirect("/");
  });
  const jsonData = JSON.stringify(originData);
  const url = process.env.MAIL_CHIMP;
  const options = {
    method: "POST",
    auth: "erinfolami:deb3cbdf1e6816680078171a1184e5d3-us8",
  };

  const request = https.request(url, options, (response) => {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/view/submitted.html");
    } else {
      res.sendFile(__dirname + "/view/failed.html");
    }
    response.on("data", (data) => {
      JSON.parse(data);
    });
  });
  request.write(jsonData);
  request.end();
});

module.exports = router;
