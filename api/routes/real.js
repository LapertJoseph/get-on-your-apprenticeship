const request = require("request");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("This is real route");
});

router.get("/students", async (req, res, body) => {
  const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/characters`;
  let json = JSON.parse(body);
  console.log(body);
});

module.exports = router;
