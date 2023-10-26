const express = require("express");
const connection = require("../configuration/dbConfig");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("home.ejs");
});

module.exports = router;