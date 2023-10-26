const express = require("express");
const router = express.Router();
const {getHome, getTestView} = require("../controllers/testController");

router.get("/", getHome);

router.get("/testView", getTestView);

module.exports = router;