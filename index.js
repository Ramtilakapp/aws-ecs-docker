const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Rasm Tilak Yadav Node Application using ECS through farget!!!!!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
