"use strick";

var express = require("express");
app = express();

app.set("views", "views");
app.set("views engine", "pug");

app.get("/", function (req, res) {
  res.render("home.pug", {});
});

app.listen(8080);
module.exports.getApp = app;
