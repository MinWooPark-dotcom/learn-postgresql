const express = require("express");
const app = express();
require("dotenv").config();

const { sequelize } = require("./models");

app.set("port", 3000);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(app.get("port"), () => {
  console.log("listening 3000");
});
