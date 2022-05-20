var express = require("express");
var router = express.Router();
const axios = require('axios');
const { response } = require('express')

router.get("/", function (req, res,) {
    res.send("This is real route");
});

router.get("/students", async (req, res) => {
  try {
    const response = await axios.get(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters`)
    res.send(response.data)  
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/randomStudents", async(req, res) => {
  try {
    await axios.get(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters`).then((response) => {
      const longueur = response.data.length -1
      const random = Math.floor(Math.random() * longueur );
      res.json({data: response.data[random]})
    })
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
