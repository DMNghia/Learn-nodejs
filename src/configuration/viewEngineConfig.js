const path = require("path");

const configViewEngine = (app, express) => {
  // config template engine
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  // Config static files
  app.use(express.static(path.join(__dirname, "../public")));
};

module.exports = configViewEngine;
