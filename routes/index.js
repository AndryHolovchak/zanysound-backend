var express = require("express");
const axios = require("axios");
var router = express.Router();

router.post("/", async function (req, res, next) {
  const { url, method, body } = req.body.payload;

  let result = null;

  if (method === "GET") {
    const response = await axios.get(url, { body });
    result = response.data;
  } else {
    const response = await axios.post(url, { body });
    result = response.data;
  }

  res.send(result);
});

module.exports = router;
