const express = require("express");
const app = express();
require("dotenv").config();
const configViewEngine = require("./configuration/viewEngineConfig");
const testRouter = require("./routes/testRouter");

// create hostname and port
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 8080;

// Config view engine
configViewEngine(app, express);

// add router
app.use("/test", testRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
