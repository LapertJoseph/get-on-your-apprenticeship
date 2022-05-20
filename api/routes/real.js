var express = require("express");
var router = express.Router();
const axios = require('axios');
const { response } = require('express')

router.get("/", function (req, res,) {
    res.send("This is real route");
});

router.get("/students", async (req, res, body) => {
  try {
    const response = await axios.get(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters`)
    res.send(response.data)  
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
