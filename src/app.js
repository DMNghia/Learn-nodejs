const express = require("express");
const app = express();
require("dotenv").config();
const configViewEngine = require("./configuration/viewEngineConfig");
const testController = require("./controllers/testController");
const homeController = require("./controllers/homeController");

// Config view engine
configViewEngine(app, express);

// add router
app.use("/test", testController);
app.use("/", homeController);

// create hostname and port
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 8080;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
