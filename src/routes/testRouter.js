const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/testView", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;