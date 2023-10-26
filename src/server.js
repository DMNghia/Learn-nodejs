const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

// create hostname and port
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 8080;

// add router
app.get("/", (req, res) => {
  res.send("Hello world");
});

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/testView", (req, res) => {
  res.render("sample.ejs");
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
