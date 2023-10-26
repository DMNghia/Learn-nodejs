const getHome = (req, res) => {
  res.send("Hello world");
}

const getTestView = (req, res) => {
  res.render("sample.ejs");
}

module.exports = {
  getHome, getTestView
}