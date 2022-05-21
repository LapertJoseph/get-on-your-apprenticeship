var express = require("express");
var router = express.Router();
const axios = require("axios");
const { response } = require("express");

router.get("/", function (req, res) {
  res.send("This is real route");
});

router.get("/students", async (req, res) => {
  // route pour plus grande liste d'élèves
  try {
    const response = await axios.get(
      `https://fedeperin-harry-potter-api-en.herokuapp.com/characters`
    );
    res.send(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/randomStudents", async (req, res) => {
  // route pour le random student (champion)
  try {
    await axios
      .get(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters`)
      .then((response) => {
        const longueur = response.data.length - 1;
        const random = Math.floor(Math.random() * longueur);
        res.json({ data: response.data[random] });
      });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/studentAppeal", async (req, res) => {
  // route pour l'appel
  try {
    await axios
      .get(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters`)
      .then((response) => response.data)
      .then((response) => {
        if (req.query.hogwartsHouse) {
          const data = response.filter(
            (student) => student.hogwartsHouse === req.query.hogwartsHouse
          );
          return res.json({ data });
        }
        return res.json({ data: response });
      });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
