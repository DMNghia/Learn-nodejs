const express = require("express");
const connection = require("../configuration/dbConfig");
const router = express.Router();

router.get("/testView", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router